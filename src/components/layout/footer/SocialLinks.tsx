import { type SocialLink } from "@/data/social";

export default function SocialLinkItem({ name, href, icon: IconComponent, color, description }: SocialLink) {
  const colorClasses = {
    green: {
      border: "group-hover:border-green-500",
      text: "text-green-500 group-hover:text-green-400",
      shadow: "group-hover:shadow-green-500/25",
      hoverText: "group-hover:text-green-400"
    },
    blue: {
      border: "group-hover:border-blue-500",
      text: "text-blue-500 group-hover:text-blue-400",
      shadow: "group-hover:shadow-blue-500/25",
      hoverText: "group-hover:text-blue-400"
    }
  };

  const classes = colorClasses[color];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-transparent hover:border-white/10"
    >
      <div className={`relative w-10 h-10 rounded-full border-2 border-white/20 ${classes.border} flex items-center justify-center transition-all duration-300 group-hover:shadow-lg ${classes.shadow} flex-shrink-0`}>
        <div className={`${classes.text} transition-colors duration-300`}>
          <IconComponent className="w-5 h-5" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-white font-medium ${classes.hoverText} transition-colors duration-300 text-sm`}>
          {name}
        </p>
        <p className="text-white/60 text-xs">{description}</p>
      </div>
    </a>
  );
}
