import React from 'react'

const FetureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Icon */}
      <div className="w-16 h-16 bg-[#e94560] rounded-full flex items-center justify-center mb-6">
        {Icon && <Icon className="text-white text-2xl" />}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FetureCard