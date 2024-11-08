// src/components/CookingComponent.jsx
import React from 'react';

function Taskbox({className}) {
    return (
        <div
          className={`flex flex-col items-start justify-center p-6 text-white rounded-lg ${className}`}
          style={{ 
            backgroundColor: '#183717', 
            width: '40rem', // Set width in rem
            height: '25rem' // Set height in rem
          }}
        >
          {/* Heading with padding and margin-bottom, aligned to the left */}
          <h2 className="text-3xl font-bold py-3 mb-4 w-full text-left relative">
            Cooking
            <span className="absolute bottom-0 left-1/2 w-1/2 border-b-4 border-green-500"></span> {/* Half green line */}
          </h2>
          
          {/* Smaller Capsule-shaped box with 'Creative' text */}
          <div className="bg-green-500 text-black px-3 py-1.5 rounded-full mb-4 text-sm">
            Creative
          </div>
          
          {/* Text aligned to the left */}
          <p className="text-lg text-left">
            Cooking is an essential life skill, allowing you to nourish your body with
            nutritious meals. From simple snacks to gourmet dishes, it all starts with
            mastering the basics in the kitchen. The right ingredients, techniques, and
            creativity come together to make every dish a masterpiece.
          </p>
        </div>
    );
}

export default Taskbox;