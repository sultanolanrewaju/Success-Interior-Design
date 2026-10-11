import React from 'react'
import { MapPin, Phone, Mail, Clock, ShieldCheck,} from 'lucide-react'

 function ServiceAreaMap() {
  // Replace this search query URL with your actual address or city/region
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1111876212835!2d3.357860874115055!3d6.507607523349642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c40c723b369%3A0x9ca0465254a05396!2s5%20Ayilara%20St%2C%20Surulere%2C%20Lagos%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1791389963484!5m2!1sen!2sng"

  return (
    <section className="bg-[#031853] py-20 px-6 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Service Details & Coverage List */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Get In Touch
          </h2>
          <p className="text-blue-100/70 text-sm sm:text-base leading-relaxed">
         Contact us through our social media or any other bike just passed.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <MapPin className="h-6 w-6 text-[#FFBD00] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-white">Address</h4>
                <p className="text-xs text-blue-100/70 mt-1">25 ayilara Street off lawanson road ojuelegba. Surulere Lagos.</p>
              </div>
            </div>

             <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Phone className="h-6 w-6 text-[#FFBD00] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-white">Phone / whatsapp Number</h4>
                <p className="text-xs text-blue-100/70 mt-1">08073212619</p>
              </div>
            </div>


             <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Mail className="h-6 w-6 text-[#FFBD00] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-white">Email</h4>
                <p className="text-xs text-blue-100/70 mt-1"> vcentsuccess@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Embedded Map Card */}
        <div className="lg:col-span-7 h-[420px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative group">
          <iframe
            title="Service Coverage Area Map"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
          />
          
          {/* Overlay Badge */}
          {/* <div className="absolute bottom-4 left-4 bg-[#031853]/95 border border-white/20 text-white px-4 py-2.5 rounded-xl text-xs font-semibold backdrop-blur-md shadow-lg flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Installers active in your area today</span>
          </div> */}
        </div>

      </div>
    </section>
  )
}

export default ServiceAreaMap