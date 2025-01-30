import Image from "next/image";
import profile from "@/public/profile.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-lg text-center">
        {/* Profile Image */}
        <Image 
          src={profile} 
          alt="My profile picture" 
          width={120} 
          height={120} 
          className="mx-auto rounded-full border-4 border-blue-500 shadow-md"
        />

        {/* Name & Tagline */}
        <h3 className="mt-5 text-3xl font-bold text-gray-800">Abreham Dessalegn</h3>
        <span className="text-blue-600 italic text-lg">"Build and Learn!"</span>

        {/* About Me Section */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptatibus doloribus dignissimos laboriosam provident delectus ratione! 
          Doloremque consequuntur, culpa maxime harum inventore incidunt molestias.
        </p>
      </div>
    </div>
  );
}
