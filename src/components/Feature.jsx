import React from 'react'
import FeatureCard from './FetureCard'

const Feature = () => {
  return (
    <div className="py-16 bg-gray-50">
        <FeatureCard 
          icon={null}
          title="Innovative Learning"
          description="We provide cutting-edge educational tools and resources to enhance student engagement and learning outcomes."
        />
        <FeatureCard 
          icon={null}
          title="Expert Faculty"
          description="Our team of experienced educators is dedicated to delivering high-quality instruction and mentorship."
        />
        <FeatureCard 
          icon={null}
          title="Modern Facilities"
          description="Our campus features state-of-the-art classrooms, labs, and recreational facilities for a complete learning experience."
        />

    </div>
  )
}

export default Feature