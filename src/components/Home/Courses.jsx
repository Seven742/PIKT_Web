import React, { useState } from 'react'
import { FiClock, FiDollarSign, FiArrowRight, FiBook } from "react-icons/fi"
import { HiOutlineAcademicCap } from "react-icons/hi2"
import { Link } from 'react-router-dom'

const coursesData = [
  {
    category: "បច្ចេកវិទ្យា",
    bg: "bg-blue-50", border: "border-blue-100", badge: "bg-blue-100 text-blue-700",
    courses: [
      { name: "បច្ចេកវិទ្យាព័ត៌មាន (IT)", duration: "៣ ឆ្នាំ", level: "AD", fee: "$180/ឆ្នាំ", desc: "ការសរសេរកម្មវិធី, បណ្ដាញ, មូលដ្ឋានទិន្នន័យ, សុវត្ថិភាពព័ត៌មាន" },
      { name: "អ៊ីឡិចត្រូនិច (Electronics)", duration: "៣ ឆ្នាំ", level: "AD", fee: "$180/ឆ្នាំ", desc: "ការជួសជុលឧបករណ៍ Electronic, Circuit Design, PLC" },
    ]
  },
  {
    category: "ហេដ្ឋារចនាសម្ព័ន្ធ",
    bg: "bg-amber-50", border: "border-amber-100", badge: "bg-amber-100 text-amber-700",
    courses: [
      { name: "អគ្គិសនី (Electrical)", duration: "៣ ឆ្នាំ", level: "AD", fee: "$180/ឆ្នាំ", desc: "ការដំឡើងអគ្គិសនី, ការជួសជុល, Renewable Energy" },
      { name: "យន្តសាស្ត្រ (Mechanics)", duration: "៣ ឆ្នាំ", level: "AD", fee: "$180/ឆ្នាំ", desc: "ជួសជុលម៉ាស៊ីន, ប្រព័ន្ធ Hydraulic, Metal Work" },
    ]
  },
  {
    category: "ពាណិជ្ជកម្ម",
    bg: "bg-emerald-50", border: "border-emerald-100", badge: "bg-emerald-100 text-emerald-700",
    courses: [
      { name: "គ្រប់គ្រងពាណិជ្ជកម្ម", duration: "៣ ឆ្នាំ", level: "AD", fee: "$170/ឆ្នាំ", desc: "ការគ្រប់គ្រង, Marketing, Finance, ការចរចា" },
      { name: "គណនេយ្យ (Accounting)", duration: "៣ ឆ្នាំ", level: "AD", fee: "$170/ឆ្នាំ", desc: "Bookkeeping, Financial Reporting, Tax, Audit" },
      { name: "ទីផ្សារ (Marketing)", duration: "៣ ឆ្នាំ", level: "AD", fee: "$170/ឆ្នាំ", desc: "Digital Marketing, Sales, Brand Management" },
    ]
  },
  {
    category: "កសិកម្ម",
    bg: "bg-green-50", border: "border-green-100", badge: "bg-green-100 text-green-700",
    courses: [
      { name: "កសិកម្ម (Agriculture)", duration: "៣ ឆ្នាំ", level: "AD", fee: "$160/ឆ្នាំ", desc: "ការដាំដំណាំ, ការចិញ្ចឹមសត្វ, ការប្រើប្រាស់ជីបង្កើន" },
      { name: "វិទ្យាសាស្ត្រជលផល", duration: "៣ ឆ្នាំ", level: "AD", fee: "$160/ឆ្នាំ", desc: "ការចិញ្ចឹមមច្ឆា, ស្រះ, Food Processing" },
    ]
  },
  {
    category: "ភាសា",
    bg: "bg-purple-50", border: "border-purple-100", badge: "bg-purple-100 text-purple-700",
    courses: [
      { name: "អក្សរសាស្ត្រអង់គ្លេស", duration: "៣ ឆ្នាំ", level: "AD", fee: "$150/ឆ្នាំ", desc: "ជំនាញ ៤ English, Literature, Translation" },
    ]
  },
]

const Courses = () => {
  const [active, setActive] = useState("ទាំងអស់")
  const cats = ["ទាំងអស់", ...coursesData.map(c => c.category)]
  const displayed = active === "ទាំងអស់" ? coursesData : coursesData.filter(c => c.category === active)

  return (
    <div>
      {/* Header */}
      <div className="bg-primary">
        <div className="xl:px-40 px-4 py-10 xl:py-14">
          <p className="font-battambang text-blue-300 text-sm uppercase tracking-widest mb-2">ការសិក្សា</p>
          <h1 className="font-moul text-white text-2xl xl:text-4xl">ឯកទេសសិក្សា</h1>
        </div>
      </div>

      <div className="xl:px-40 px-4 py-12">
        {/* Intro */}
        <div className="text-center mb-10">
          <h2 className="font-moul text-primary text-2xl mb-3">ជ្រើសរើសឯកទេសសិក្សារបស់អ្នក</h2>
          <p className="font-battambang text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
            PIKT មានកម្មវិធីសិក្សាចំនួន ១០+ ឯកទេស ក្នុងវិស័យបច្ចេកទេស ពាណិជ្ជកម្ម និងកសិកម្ម ទទួលស្គាល់ ដោយក្រសួងការងារ
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`font-battambang px-4 py-2 rounded-full text-sm border transition-all duration-200
              ${active === c ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        {displayed.map((group, gi) => (
          <div key={gi} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <FiBook className="text-primary text-lg" />
              <h3 className="font-moul text-primary text-xl">{group.category}</h3>
              <div className="flex-1 h-px bg-primary/10" />
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {group.courses.map((course, ci) => (
                <div key={ci} className={`border ${group.border} ${group.bg} rounded-xl p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-battambang font-bold text-gray-800 text-sm leading-snug flex-1 pr-2">{course.name}</h4>
                    <span className={`font-share text-xs px-2.5 py-1 rounded-full font-bold shrink-0 ${group.badge}`}>{course.level}</span>
                  </div>
                  <p className="font-battambang text-gray-600 text-xs leading-relaxed mb-5">{course.desc}</p>
                  <div className="flex gap-2 text-xs">
                    <span className="flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-lg border text-gray-600 font-battambang">
                      <FiClock className="text-primary" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-lg border text-emerald-700 font-battambang">
                      <FiDollarSign className="text-emerald-500" /> {course.fee}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Degree Info */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <HiOutlineAcademicCap className="text-primary text-2xl" />
            <h3 className="font-moul text-primary text-xl">ព័ត៌មានអំពីសញ្ញាបត្រ</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Associate Degree (AD)", desc: "រយៈពេល ៣ ឆ្នាំ ត្រូវបានទទួលស្គាល់ ដោយក្រសួងការងារ" },
              { title: "ការហ្វឹកហ្វឺន", desc: "ទ្រឹស្ដី ៦០% និង ជាក់ស្ដែង ៤០% ក្នុង Lab ទំនើប" },
              { title: "ការងារ", desc: "ជំនួយ Job Placement ជាមួយ ក្រុមហ៊ុន Partner ក្នុងខេត្ត" },
            ].map((info, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-gray-100">
                <h4 className="font-moul text-primary text-sm mb-2">{info.title}</h4>
                <p className="font-battambang text-gray-600 text-sm leading-relaxed">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Apply CTA */}
        <div className="mt-10 bg-primary rounded-xl p-8 text-center text-white">
          <h3 className="font-moul text-xl mb-3">ចង់ចុះឈ្មោះសិក្សា?</h3>
          <p className="font-battambang text-blue-200 mb-6 text-sm">ទំនាក់ទំនង ឬចូលមកដោយផ្ទាល់ នៅ PIKT</p>
          <Link to="/contact">
            <button className="bg-white text-primary font-battambang px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2">
              ទំនាក់ទំនងឥឡូវ <FiArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Courses
