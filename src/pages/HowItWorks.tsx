
import { FC } from "react";
import Header from "@/components/Header";

const HowItWorks: FC = () => {
  return (
    <div className="min-h-screen bg-sky-50/90">
      {/* Header - always visible */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-sky-100/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto">
          <Header />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 md:px-8 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">How MoodTunes Works</h1>
        
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Introduction</h2>
          <p className="mb-4">
            MoodTunes is an innovative AI-powered platform that transforms visual imagery into personalized musical compositions. 
            By analyzing the emotional and contextual elements of your images, our system creates unique audio experiences that 
            reflect the mood and essence of your visual memories.
          </p>
          <p>
            The goal of MoodTunes is to bridge the gap between visual and auditory art forms, creating personalized 
            soundscapes that enhance the emotional connection to your images and provide a multi-sensory experience.
          </p>
        </section>

        {/* Image Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Image Analysis</h2>
          <p className="mb-4">
            When you upload an image to MoodTunes, our system processes it through multiple layers of analysis:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <span className="font-medium">Visual Feature Extraction</span>: We analyze color palettes, brightness levels, 
              contrast ratios, and saturation to determine the visual tone of your image.
            </li>
            <li>
              <span className="font-medium">Object Recognition</span>: Using Convolutional Neural Networks (CNNs), we 
              identify key objects, scenes, and environments present in your image.
            </li>
            <li>
              <span className="font-medium">Facial Analysis</span>: For images containing people, we detect facial 
              expressions and emotional cues using specialized emotion recognition models.
            </li>
            <li>
              <span className="font-medium">Composition Assessment</span>: We evaluate the overall composition, 
              including balance, symmetry, and focal points.
            </li>
          </ul>
          <p>
            These analyses utilize pre-trained deep learning models optimized for visual understanding, 
            ensuring accurate interpretation of your image's emotional and contextual elements.
          </p>
        </section>

        {/* Mood Detection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Mood Detection</h2>
          <p className="mb-4">
            MoodTunes translates visual data into emotional context through:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <span className="font-medium">Color Psychology</span>: We map color schemes to emotional states 
              (e.g., warm colors often convey happiness or energy, while cool colors may suggest calmness or melancholy).
            </li>
            <li>
              <span className="font-medium">Sentiment Analysis</span>: For text elements in images, we apply natural 
              language processing to detect sentiment.
            </li>
            <li>
              <span className="font-medium">Contextual Understanding</span>: Environmental factors such as landscapes, 
              weather conditions, and settings contribute to mood assessment.
            </li>
            <li>
              <span className="font-medium">Emotional Classification</span>: All signals are processed through our 
              classification system, determining emotions across multiple dimensions including joy, sadness, 
              excitement, tranquility, tension, and more.
            </li>
          </ul>
          <p>
            Our multi-layered approach ensures that subtle emotional nuances in your images are captured and translated 
            into the musical composition.
          </p>
        </section>

        {/* Music Generation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Music Generation</h2>
          <p className="mb-4">
            Once the mood profile is established, MoodTunes generates personalized music by controlling:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <span className="font-medium">Melodic Structure</span>: The primary melody is crafted based on the 
              dominant emotion, using appropriate scales (major for positive emotions, minor for melancholic ones).
            </li>
            <li>
              <span className="font-medium">Tempo & Rhythm</span>: The speed and rhythmic patterns reflect the energy 
              level detected in the image (faster for energetic scenes, slower for calm or contemplative ones).
            </li>
            <li>
              <span className="font-medium">Instrumentation</span>: Instruments are selected to match the mood 
              (e.g., strings for emotional depth, piano for intimacy, percussion for energy).
            </li>
            <li>
              <span className="font-medium">Harmonic Complexity</span>: The chord progressions and harmonic structure 
              are tailored to match the complexity and depth of the emotional content.
            </li>
            <li>
              <span className="font-medium">Dynamic Range</span>: Volume variations throughout the composition reflect 
              the visual contrast and emotional intensity.
            </li>
          </ul>
          <p className="mb-4">
            Our music generation utilizes a combination of rule-based algorithmic composition and neural network models 
            trained on vast music datasets. We employ modified versions of Google's Magenta, combined with custom 
            MIDI generation algorithms to create authentic-sounding compositions.
          </p>
        </section>

        {/* Workflow Representation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">How The Process Works</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <span className="font-medium">Image Upload</span>: You upload your image through our intuitive interface.
              </li>
              <li>
                <span className="font-medium">Visual Processing</span>: Our AI analyzes visual elements including colors, 
                objects, faces, and composition.
              </li>
              <li>
                <span className="font-medium">Emotional Mapping</span>: The system creates an emotional profile based on 
                the visual analysis.
              </li>
              <li>
                <span className="font-medium">Musical Parameter Selection</span>: The emotional profile determines key 
                musical parameters like key, tempo, and instrumentation.
              </li>
              <li>
                <span className="font-medium">Composition Generation</span>: Our music generation models create a unique 
                musical piece based on these parameters.
              </li>
              <li>
                <span className="font-medium">Audio Rendering</span>: The musical composition is rendered as a 
                high-quality audio file.
              </li>
              <li>
                <span className="font-medium">Delivery</span>: The finished music is presented to you alongside your 
                original image.
              </li>
            </ol>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Applications & Future</h2>
          <p className="mb-4">
            MoodTunes offers numerous real-world applications, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <span className="font-medium">Therapeutic Tools</span>: Creating personalized music therapy based on 
              images that evoke positive emotions.
            </li>
            <li>
              <span className="font-medium">Content Creation</span>: Helping creators generate unique soundtracks for 
              visual content.
            </li>
            <li>
              <span className="font-medium">Personal Memories</span>: Enhancing photo albums with matching musical 
              compositions that deepen the emotional connection.
            </li>
            <li>
              <span className="font-medium">Mood-Responsive Environments</span>: Generating ambient music for spaces 
              based on the visual surroundings.
            </li>
          </ul>
          <p className="mb-4">
            Looking ahead, we plan to expand MoodTunes with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-time video analysis for dynamic music generation that evolves with moving images.</li>
            <li>User feedback integration to refine and personalize the music-generation algorithms.</li>
            <li>Collaborative features allowing multiple images to influence a single composition.</li>
            <li>Extended customization options for greater control over the generated music.</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-sky-700/70">
          <p>© 2025 MoodTunes. All rights reserved.</p>
          <p className="mt-2">Turning visuals into sound through the power of AI.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
