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
        I am a passionate developer with a strong focus on building 
        efficient and user-friendly applications. My expertise lies
         in creating intuitive solutions that enhance productivity and
          provide meaningful user experiences. With a keen eye for 
          detail and a drive for innovation, I enjoy working on projects that solve real
          -world problems using modern technologies. My skill set includes front
          -end and back-end development, API integration, and AI-driven
           solutions, always striving to merge creativity with functionality.
        </p>
      </div>
    </div>
  );
}
