import { NextResponse } from "next/server";
import { prismadb } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request:Request) {
    try {
        console.log("Received POST request for registration.");
        const body = await request.json();
        console.log("Parsed request body:", body);
        const { email, username, password, firstName, lastName } = body;

        if (!email || !username || !password || !firstName || !lastName) {
            console.log("Missing required fields:", { email, username, password, firstName, lastName });
            return NextResponse.json(
              { message: "Missing required fields." },
              { status: 400 }
            );
        }

        console.log("All required fields provided.");

        console.log("Checking if a user already exists with the provided email or username...");

        const existingUser = await prismadb.user.findFirst({
            where: {
              OR: [{ email }, { username }],
            },
         });

         if (existingUser) {
            console.log("User already exists:", existingUser);
            return NextResponse.json(
              { message: "User with provided email or username already exists." },
              { status: 409 }
            );
          }

          console.log("No existing user found.");

          console.log("Hashing password...");

          const hashedPassword = await bcrypt.hash(password, 12);

          console.log("Password hashed successfully.");

          console.log("Creating new user in the database...");

          const user = await prismadb.user.create({
            data: {
              email,
              username,
              photo:"",
              firstName,
              lastName,
              hashedPassword, // Save hashed password in the database
            },
          });

          console.log("User created successfully:", user);

          return NextResponse.json(user || {}, { status: 201 });

        
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
          { message: "Something went wrong." },
          { status: 500 }
        );
        
    }
    
}