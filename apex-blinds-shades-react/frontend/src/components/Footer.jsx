import React from 'react'
import { ArrowRight, ArrowUpRight, Award, CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Crosshair, DoorOpen, Facebook, Home, Instagram, Lightbulb, Mail, MapPin, Menu, Minus, Phone, Plus, Ruler, ShieldCheck, Sparkles, Star, Sun, X, Zap,Twitter } from 'lucide-react'

function Footer(){
    return(
        <footer className="border-t border-white/5 bg-[#ffffff] ">
<div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

<div className="lg:col-span-2 ">
    <div className=" w-50 h-25">
    <span><img src='../logo.png' className='w-auto h-50  relative top-[-50px]'/></span>
            </div> 
    <p className="mt-5 max-w-md py- text-sm leading-7 text-black/35">Custom window treatments, precision measurement and professional installation for homes and workspaces.</p>
<div className="mt-6 flex gap-2">
<a href="https://www.instagram.com" target='blank' className="grid h-10 w-10 place-items-center rounded-full border border-white/8">
<Instagram  size={30} color='#031853 '/></a>
<a href="https://www.google.com" target='blank' className="grid h-10 w-10 place-items-center rounded-full border border-white/8">
<Facebook size={30} color='#031853 '/>
</a>
<a href="https://www.google.com" target='blank' className="grid h-10 w-10 place-items-center rounded-full border border-white/8">
<Twitter size={30} color='#031853 '/>
</a>
</div>

</div>

<div>
    <h4 className="text-sm font-semibold">Contact</h4>
    <div className="mt-5 space-y-4 text-sm text-black/40">
    <p><Phone className="mr-2 inline h-4 w-4"/>+234 (080) 732-12619 </p>
    <p><Mail className="mr-2 inline h-4 w-4"/>vcentsuccess@gmail.com</p>
    <p><MapPin className="mr-2 inline h-4 w-4"/>25 ayilara Street off lawanson road ojuelegba. Surulere Lagos.</p>
    </div>
    </div>
    <div><h4 className="text-sm font-semibold">Hours</h4>
    <div className="mt-5 space-y-3 text-sm text-black/40"><p>Mon–Fri · 8:00–18:00</p>
    <p>Saturday · 9:00–14:00</p><p>Sunday · By appointment</p>
    </div></div></div>
    <div className="mt-12 border-t border-white/5 pt-6 text-xs text-black/55">© 2026 Success Blinds & Shades Official website.</div>
    </div>
    <div>
            {/* <span><img src='../logo.png' /></span> */}

    </div>
    </footer>
)
}


export default Footer