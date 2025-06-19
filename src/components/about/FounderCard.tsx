import { FaLinkedin } from 'react-icons/fa'
import { founders } from '@/data/team'

export default function FounderCard({ founder }: { founder: typeof founders[0] }) {
    return (
      <div className="bg-[#1E1E1E] border border-white/5 rounded-xl p-8">
        {founder.image && (
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
            <img
              src={founder.image} 
              alt={founder.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        )}
  
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
            {founder.linkedIn && (
                <FaLinkedin className="text-blue-500 text-2xl cursor-pointer hover:text-blue-600" onClick={() => window.open(founder.linkedIn, '_blank')} />
            )}
          </div>
        </div>
        
        <p className="text-gray-400 leading-relaxed text-center text-sm mb-6">{founder.bio}</p>
      </div>
    )
  }
