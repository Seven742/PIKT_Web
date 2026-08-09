import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiArrowRight, FiAward, FiUsers, FiBook, FiCheckCircle } from "react-icons/fi"
import { HiOutlineAcademicCap } from "react-icons/hi2"
import { MdOutlineBusinessCenter } from "react-icons/md"
import School from "../../assets/School/School.JPG"
import School1 from "../../assets/School/School1.JPG"
import School2 from "../../assets/School/School2.JPG"
import School3 from "../../assets/School/School3.JPG"

const slides = [
  { img: School,  title: "ស្វាគមន៍មកកាន់ PIKT", sub: "ផ្ដល់ការអប់រំបច្ចេកទេស និងវិជ្ជាជីវៈ ដ៏ល្អប្រសើរ" },
  { img: School1, title: "ការអប់រំបច្ចេកទេស", sub: "Technical & Vocational Education for Cambodia's Future" },
  { img: School2, title: "ពង្រឹងសមត្ថភាពធនធានមនុស្ស", sub: "Empowering Youth Through Quality Education" },
  { img: School3, title: "ជំរុញការអភិវឌ្ឍន៍ខេត្ត", sub: "Driving Sustainable Development in Kampong Thom" },
]

const stats = [
  { icon: <HiOutlineAcademicCap className="text-2xl" />, num: "២០០១", label: "ឆ្នាំបង្កើត" },
  { icon: <FiUsers className="text-2xl" />, num: "៥០+", label: "គ្រូបង្រៀន" },
  { icon: <FiBook className="text-2xl" />, num: "១០+", label: "ឯកទេសសិក្សា" },
  { icon: <FiAward className="text-2xl" />, num: "៥០០០+", label: "និស្សិតបញ្ចប់" },
]

const features = [
  { icon: <HiOutlineAcademicCap className="text-3xl text-primary" />, title: "ការអប់រំគ្រប់គ្រាន់", desc: "កម្មវិធីសិក្សាបច្ចេកទេស ស្ដង់ដារតាមតម្រូវការទីផ្សារការងារ" },
  { icon: <FiUsers className="text-3xl text-primary" />, title: "គ្រូបង្រៀនជំនាញ", desc: "គ្រូបង្រៀនមានបទពិសោធ និងចំណេះដឹងជ្រៅជ្រះ ក្នុងវិស័យនីមួយៗ" },
  { icon: <MdOutlineBusinessCenter className="text-3xl text-primary" />, title: "ការតភ្ជាប់ការងារ", desc: "ទំនាក់ទំនងជាមួយក្រុមហ៊ុន ដើម្បីជួយការងារបន្ទាប់ពីបញ្ចប់" },
  { icon: <FiCheckCircle className="text-3xl text-primary" />, title: "សញ្ញាបត្រទទួលស្គាល់", desc: "ទទួលស្គាល់ ដោយក្រសួងការងារ និងបណ្ដុះបណ្ដាលវិជ្ជាជីវៈ" },
  { icon: <FiBook className="text-3xl text-primary" />, title: "ហ្វឹកហ្វឺនជាក់ស្ដែង", desc: "Lab ទំនើប ហ្វឹកហ្វឺនជាក់ស្ដែង ត្រូវការបន្ទាប់ពីទ្រឹស្ដី" },
  { icon: <FiAward className="text-3xl text-primary" />, title: "ថ្លៃសិក្សាសម", desc: "ថ្លៃសិក្សាសមរម្យ មានអាហារូបករណ៍ សម្រាប់និស្សិតត្រូវការ" },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      {/* ====== Hero Slideshow ====== */}
      <div className="relative w-full h-[440px] md:h-[540px] xl:h-[640px] overflow-hidden">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
        ))}

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center xl:px-40 px-6">
          <div className="max-w-2xl text-white">
            <p className="font-battambang text-blue-300 text-sm mb-3 tracking-widest uppercase">
              វិទ្យាស្ថានបច្ចេកទេស កំពង់ធំ
            </p>
            {slides.map((s, i) => (
              <div key={i} className={`transition-all duration-700 ${i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                <h1 className="font-moul text-3xl md:text-4xl xl:text-5xl leading-relaxed mb-4">{s.title}</h1>
                <p className="font-battambang text-lg text-gray-200 mb-8">{s.sub}</p>
              </div>
            ))}
            <div className="flex gap-3 flex-wrap mt-16 md:mt-20">
              <Link to="/courses">
                <button className="bg-primary hover:bg-blue-900 text-white font-battambang px-7 py-3 rounded-lg flex items-center gap-2 transition-all duration-200">
                  ស្វែងយល់ Course
                  <FiArrowRight />
                </button>
              </Link>
              <Link to="/history">
                <button className="border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-battambang px-7 py-3 rounded-lg transition-all duration-200">
                  ប្រវត្តិ PIKT
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Arrow Controls */}
        <button onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all">
          <FiChevronLeft className="text-xl" />
        </button>
        <button onClick={() => setCurrent(c => (c + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all">
          <FiChevronRight className="text-xl" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40'}`} />
          ))}
        </div>
      </div>

      {/* ====== Stats Bar ====== */}
      <div className="bg-primary">
        <div className="xl:px-40 px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center text-white">
              <div className="flex justify-center mb-2 opacity-70">{s.icon}</div>
              <p className="font-moul text-3xl xl:text-4xl mb-1">{s.num}</p>
              <p className="font-battambang text-blue-200 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ====== About Section ====== */}
      <div className="xl:px-40 px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-battambang text-primary text-sm uppercase tracking-widest mb-3">អំពីស្ថាប័ន</p>
            <h2 className="font-moul text-primary text-2xl xl:text-3xl leading-relaxed mb-5">
              វិទ្យាស្ថានបច្ចេកទេស<br />កំពង់ធំ (PIKT)
            </h2>
            <p className="font-battambang text-gray-600 leading-loose mb-4">
              វិទ្យាស្ថានបច្ចេកទេស កំពង់ធំ (PIKT) ត្រូវបានបង្កើតឡើង នៅថ្ងៃទី ១១ ខែមិថុនា ឆ្នាំ ២០០១ ដោយការគាំទ្រ ហិរញ្ញវត្ថុពីធនាគារអភិវឌ្ឍន៍អាស៊ី (ADB) ក្នុងគោលដៅ ផ្ដល់ការអប់រំបច្ចេកទេស និងវិជ្ជាជីវៈ ដ៏ល្អប្រសើរ
            </p>
            <p className="font-battambang text-gray-600 leading-loose mb-7">
              ស្ថាប័ននេះ ស្ថិតក្នុងក្រុងស្ទឹងសែន ខេត្តកំពង់ធំ ហើយបានរួមចំណែកក្នុងការអភិវឌ្ឍ ធនធានមនុស្សសម្រាប់ ខេត្ត និងប្រទេសជាតិ រហូតមកដល់បច្ចុប្បន្ន
            </p>
            <Link to="/history">
              <button className="bg-primary text-white font-battambang px-7 py-3 rounded-lg hover:bg-blue-900 flex items-center gap-2 transition-all duration-200">
                អានប្រវត្តិ PIKT
                <FiArrowRight />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={School1} alt="PIKT" className="rounded-xl object-cover h-52 w-full" />
            <img src={School2} alt="PIKT" className="rounded-xl object-cover h-52 w-full mt-6" />
            <img src={School3} alt="PIKT" className="rounded-xl object-cover h-52 w-full -mt-3" />
            <img src={School}  alt="PIKT" className="rounded-xl object-cover h-52 w-full mt-3" />
          </div>
        </div>
      </div>

      {/* ====== Why PIKT ====== */}
      <div className="bg-gray-50 xl:px-40 px-4 py-16">
        <div className="text-center mb-12">
          <p className="font-battambang text-primary text-sm uppercase tracking-widest mb-3">ហេតុអ្វីបានជាជ្រើសរើស PIKT</p>
          <h2 className="font-moul text-primary text-2xl xl:text-3xl">គុណភាព ដែលអ្នកជឿទុកចិត្ត</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
              <h3 className="font-moul text-gray-800 text-base mb-2">{f.title}</h3>
              <p className="font-battambang text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ====== CTA ====== */}
      <div className="bg-primary xl:px-40 px-4 py-14 text-center">
        <h2 className="font-moul text-white text-2xl xl:text-3xl mb-4">ចុះឈ្មោះសិក្សានៅ PIKT ថ្ងៃនេះ</h2>
        <p className="font-battambang text-blue-200 mb-8 max-w-xl mx-auto leading-relaxed">
          ចាប់ផ្ដើមអនាគតរបស់អ្នក ជាមួយការអប់រំបច្ចេកទេស និងវិជ្ជាជីវៈ ដ៏មានគុណភាព
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact">
            <button className="bg-white text-primary font-battambang px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-bold flex items-center gap-2">
              ទំនាក់ទំនងយើង
              <FiArrowRight />
            </button>
          </Link>
          <Link to="/courses">
            <button className="border-2 border-white text-white font-battambang px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-all">
              មើល Course ទាំងអស់
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
