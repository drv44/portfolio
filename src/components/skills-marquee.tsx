// import { skills } from "@/lib/data"

// export default function SkillsSlider() {
//   return (
//     <div className="overflow-hidden w-full py-8 bg-background">
//       <div className="skills-slider">
//         <div className="skills-track">
//           {skills.concat(skills).map((skill: any, idx: number) => (
//             <div key={skill.name + idx} className="flex flex-col items-center min-w-[120px] mx-8">
//               <skill.icon
//                 className="h-14 w-14 mb-2"
//                 style={{ color: "#60a5fa", stroke: "#60a5fa", filter: "drop-shadow(0 0 12px #60a5fa88)" }}
//               />
//               <span className="text-foreground text-base font-medium">{skill.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <style jsx>{`
//         .skills-slider {
//           width: 100%;
//           position: relative;
//         }
//         .skills-track {
//           display: flex;
//           width: max-content;
//           animation: scroll-left 120s linear infinite;
//         }
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   )
// }

import { skills } from "@/lib/data"
import type { Skill } from "@/lib/data"

export default function SkillsSlider() {
  return (
    <div className="overflow-hidden w-full py-8 bg-background">
      <div className="skills-slider">
        <div className="skills-track">
          {skills.concat(skills).map((skill: Skill, idx: number) => (
            <div key={skill.name + idx} className="flex flex-col items-center min-w-[120px] mx-8">
              <skill.icon
                className="h-14 w-14 mb-2"
                style={{ color: "#60a5fa", stroke: "#60a5fa", filter: "drop-shadow(0 0 12px #60a5fa88)" }}
              />
              <span className="text-foreground text-base font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills-slider {
          width: 100%;
          position: relative;
        }
        .skills-track {
          display: flex;
          width: fit-content;
          min-width: 200%;
          animation: scroll-left 200s linear infinite;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}