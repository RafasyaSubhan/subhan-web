export function ProfileImage() {
    return (
        <div className="group relative w-64 md:w-80 lg:w-[400px]">
            <img 
                src="/rafa-profile.svg" 
                alt="Rafasya Muhammad Subhan" 
                className="w-full object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-95"
            />
            <img 
                src="/rafa-profile2.svg" 
                alt=""
                className="w-full object-contain absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100"
            />
        </div>
    );
}
