import React, { useState } from 'react'
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { HiOutlineAcademicCap } from "react-icons/hi2"

import t1 from "../../assets/teachers/LokEkHeang.jpg"
import t2 from "../../assets/teachers/RinVityadaro.JPG"
import t3 from "../../assets/teachers/KyThida.jpg"
import t4 from "../../assets/teachers/KhemKhemrin.jpg"
import t5 from "../../assets/teachers/AtRotha.jpg"
import t6 from "../../assets/teachers/ChangSovatey.jpg"
import t7 from "../../assets/teachers/ChapVannakdet.png"
import t8 from "../../assets/teachers/ChhayPiseth.jpg"
import t9 from "../../assets/teachers/ChhonVannarong.jpg"
import t10 from "../../assets/teachers/HeangSokhy.jpg"
import t11 from "../../assets/teachers/HengSophon.jpg"
import t12 from "../../assets/teachers/HimSeanghon.jpg"
import t13 from "../../assets/teachers/HiSochea.jpg"
import t14 from "../../assets/teachers/HumVansoy.png"
import t15 from "../../assets/teachers/InUn.jpg"
import t16 from "../../assets/teachers/KhatBunthoeung.jpg"
import t17 from "../../assets/teachers/KhengRun.jpg"
import t18 from "../../assets/teachers/KolMarine.jpg"
import t19 from "../../assets/teachers/ManIengla.jpg"
import t20 from "../../assets/teachers/MaoPutthy.JPEG"
import t21 from "../../assets/teachers/NalKimhak.jpg"
import t22 from "../../assets/teachers/NalSokneng.jpg"
import t23 from "../../assets/teachers/NopSopanha.JPG"
import t24 from "../../assets/teachers/NuonSina.JPG"
import t25 from "../../assets/teachers/OnSokIn.jpg"
import t26 from "../../assets/teachers/OukSovathira.jpg"
import t27 from "../../assets/teachers/OungTon.jpg"
import t28 from "../../assets/teachers/PaTongleang.JPG"
import t29 from "../../assets/teachers/PromVasana.jpg"
import t30 from "../../assets/teachers/RinKimPisey.JPG"
import t31 from "../../assets/teachers/SamounSaman.jpg"
import t32 from "../../assets/teachers/SamSavath.jpg"
import t33 from "../../assets/teachers/SamVeasna.jpg"
import t34 from "../../assets/teachers/SanKimChen.jpg"
import t35 from "../../assets/teachers/SeangTheng.jpg"
import t36 from "../../assets/teachers/SekSokHoeun.JPG"
import t37 from "../../assets/teachers/SengNay.JPG"
import t38 from "../../assets/teachers/SoAngKhin.JPG"
import t39 from "../../assets/teachers/SokItsiam.jpg"
import t40 from "../../assets/teachers/SonNarith.jpg"
import t41 from "../../assets/teachers/SonSeavheng.PNG"
import t42 from "../../assets/teachers/SuSun.jpg"
import t43 from "../../assets/teachers/SumChavy.JPG"
import t44 from "../../assets/teachers/TanKimsrun.jpg"
import t45 from "../../assets/teachers/VunVichit.jpg"
import t46 from "../../assets/teachers/YemChanta.JPG"
import t47 from "../../assets/teachers/EkHeang.JPG"

const allTeachers = [
  { id: 1,  img: t1,  name: "លោក ឯក ហៀង",        pos: "នាយក",          sub: "ដឹកនាំស្ថាប័ន" },
  { id: 2,  img: t2,  name: "លោក រិន វិទ្យាដារ៉ូ", pos: "នាយករង",        sub: "អក្សរសាស្ត្រអង់គ្លេស" },
  { id: 3,  img: t3,  name: "កញ្ញា គី ធីតា",       pos: "នាយករង",        sub: "គ្រប់គ្រងពាណិជ្ជកម្ម" },
  { id: 4,  img: t4,  name: "លោក ខឹម ខេមរិន្ទ",   pos: "នាយករង",        sub: "ពាណិជ្ជកម្ម" },
  { id: 5,  img: t5,  name: "លោក អាត រដ្ឋា",       pos: "គ្រូបង្រៀន",    sub: "គណិតវិទ្យា" },
  { id: 6,  img: t6,  name: "កញ្ញា ឆាង សុវតី",     pos: "គ្រូបង្រៀន",    sub: "ទីផ្សារ" },
  { id: 7,  img: t7,  name: "លោក ចាប វណ្ណដែត",    pos: "គ្រូបង្រៀន",    sub: "អគ្គិសនី" },
  { id: 8,  img: t8,  name: "លោក ឆាយ ពិសិដ្ឋ",    pos: "គ្រូបង្រៀន",    sub: "គ្រប់គ្រងកសិកម្ម" },
  { id: 9,  img: t9,  name: "លោក ឆន វណ្ណារ៉ុង",   pos: "គ្រូបង្រៀន",    sub: "ពាណិជ្ជកម្ម" },
  { id: 10, img: t10, name: "លោក ហៀង សុខហ៊ី",     pos: "គ្រូបង្រៀន",    sub: "វិទ្យាសាស្ត្រជលផល" },
  { id: 11, img: t11, name: "លោក ហេង សុផន",        pos: "គ្រូបង្រៀន",    sub: "យន្តសាស្ត្រ" },
  { id: 12, img: t12, name: "លោក ហ៊ឹម ស៊ាងហុន",   pos: "គ្រូបង្រៀន",    sub: "ព័ត៌មានវិទ្យា" },
  { id: 13, img: t13, name: "លោក ហ៊ ស៊ាចា",        pos: "គ្រូបង្រៀន",    sub: "ជីវវិទ្យា" },
  { id: 14, img: t14, name: "លោក ហ៊ុម វ៉ានសូយ",   pos: "គ្រូបង្រៀន",    sub: "ជលផល" },
  { id: 15, img: t15, name: "លោក អ៊ីន អ៊ូន",       pos: "គ្រូបង្រៀន",    sub: "អគ្គិសនី" },
  { id: 16, img: t16, name: "លោក ខាត់ បុញ្ញធ្ញ",   pos: "គ្រូបង្រៀន",    sub: "យន្តសាស្ត្រ" },
  { id: 17, img: t17, name: "លោក ខេង រ៉ុន",        pos: "គ្រូបង្រៀន",    sub: "អគ្គិសនី" },
  { id: 18, img: t18, name: "កញ្ញា គល់ ម៉ារីន",    pos: "គ្រូបង្រៀន",    sub: "គណនេយ្យ" },
  { id: 19, img: t19, name: "លោក ម៉ែន យ៉ែងឡា",    pos: "គ្រូបង្រៀន",    sub: "ព័ត៌មានវិទ្យា" },
  { id: 20, img: t20, name: "លោក ម៉ាវ ពុទ្ធី",     pos: "គ្រូបង្រៀន",    sub: "ជលផល" },
  { id: 21, img: t21, name: "លោក ណាល់ គីមហាក់",   pos: "គ្រូបង្រៀន",    sub: "ការគ្រប់គ្រង" },
  { id: 22, img: t22, name: "លោក ណាល់ សុខនែង",    pos: "គ្រូបង្រៀន",    sub: "ទីផ្សារ" },
  { id: 23, img: t23, name: "លោក នុប សុភ័ណ្ហ",     pos: "គ្រូបង្រៀន",    sub: "ជីវវិទ្យា" },
  { id: 24, img: t24, name: "កញ្ញា នួន ស៊ីណា",     pos: "គ្រូបង្រៀន",    sub: "រូបវវិទ្យា" },
  { id: 25, img: t25, name: "លោក អន សុខអ៊ិន",      pos: "គ្រូបង្រៀន",    sub: "គណិតវិទ្យា" },
  { id: 26, img: t26, name: "កញ្ញា អ៊ូក សុវត្ថិរា", pos: "គ្រូបង្រៀន",    sub: "ភាសាអង់គ្លេស" },
  { id: 27, img: t27, name: "លោក អ៊ូង ទ័ន",        pos: "គ្រូបង្រៀន",    sub: "ការគ្រប់គ្រង" },
  { id: 28, img: t28, name: "លោក ផា ត្រីឡាំង",     pos: "គ្រូបង្រៀន",    sub: "ជីវវិទ្យា" },
  { id: 29, img: t29, name: "កញ្ញា ប្រូម វ៉ាសនា",  pos: "គ្រូបង្រៀន",    sub: "គីមីវិទ្យា" },
  { id: 30, img: t30, name: "កញ្ញា រិន គីមព្រ័ស",  pos: "គ្រូបង្រៀន",    sub: "ណែនាំ" },
  { id: 31, img: t31, name: "លោក សំអូន សំអាន",     pos: "គ្រូបង្រៀន",    sub: "ជលផល" },
  { id: 32, img: t32, name: "លោក សំ សាវ៉ាត",       pos: "គ្រូបង្រៀន",    sub: "ហិរញ្ញវត្ថុ" },
  { id: 33, img: t33, name: "លោក សំ វ៉ាស្ណា",      pos: "គ្រូបង្រៀន",    sub: "វិទ្យាសាស្ត្រ" },
  { id: 34, img: t34, name: "លោក សាន គីម​ចេន",     pos: "គ្រូបង្រៀន",    sub: "ព័ត៌មានវិទ្យា" },
  { id: 35, img: t35, name: "លោក ស៊ាង ថេង",        pos: "គ្រូបង្រៀន",    sub: "ជីវវិទ្យា" },
  { id: 36, img: t36, name: "លោក សែក សុខហ្មមើន",  pos: "គ្រូបង្រៀន",    sub: "បណ្ដុះបណ្ដាល" },
  { id: 37, img: t37, name: "លោក សេង ណ្ហាយ",      pos: "គ្រូបង្រៀន",    sub: "អគ្គិសនី" },
  { id: 38, img: t38, name: "កញ្ញា សូ អាងខ្ញីន",   pos: "គ្រូបង្រៀន",    sub: "ពាណិជ្ជកម្ម" },
  { id: 39, img: t39, name: "លោក សុក អ៊ីចៀម",     pos: "គ្រូបង្រៀន",    sub: "ព័ត៌មានវិទ្យា" },
  { id: 40, img: t40, name: "លោក សន ណារិទ្ធ",      pos: "គ្រូបង្រៀន",    sub: "ភូគព្ភសាស្ត្រ" },
  { id: 41, img: t41, name: "លោក សន ស៊ាវហ្ហេង",   pos: "គ្រូបង្រៀន",    sub: "គណិតវិទ្យា" },
  { id: 42, img: t42, name: "លោក ស៊ូ ស៊ូន",        pos: "គ្រូបង្រៀន",    sub: "យន្តសាស្ត្រ" },
  { id: 43, img: t43, name: "កញ្ញា សំ ចាវី",       pos: "គ្រូបង្រៀន",    sub: "ពាណិជ្ជកម្ម" },
  { id: 44, img: t44, name: "លោក តាន គីមស្រ៊ុន",  pos: "គ្រូបង្រៀន",    sub: "យន្តសាស្ត្រ" },
  { id: 45, img: t45, name: "លោក វ៉ុន វិចិត្ត",    pos: "គ្រូបង្រៀន",    sub: "ព័ត៌មានវិទ្យា" },
  { id: 46, img: t46, name: "កញ្ញា យ៉ែម ចន្ទ",     pos: "គ្រូបង្រៀន",    sub: "ជីវវិទ្យា" },
  { id: 47, img: t47, name: "លោក ឯក ហៀង (EkHeang)", pos: "នាយក",        sub: "ដឹកនាំស្ថាប័ន" },
]

const PER_PAGE = 12

const Teacher = () => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filtered = allTeachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.sub.toLowerCase().includes(search.toLowerCase()) ||
    t.pos.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const shown = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPage(1)
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-primary">
        <div className="xl:px-40 px-4 py-10 xl:py-14">
          <p className="font-battambang text-blue-300 text-sm uppercase tracking-widest mb-2">ការអប់រំ</p>
          <h1 className="font-moul text-white text-2xl xl:text-4xl">គ្រូបង្រៀន</h1>
        </div>
      </div>

      <div className="xl:px-40 px-4 py-12">
        {/* Stats & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <HiOutlineAcademicCap className="text-primary text-2xl" />
            </div>
            <div>
              <p className="font-moul text-primary text-base">ក្រុមគ្រូបង្រៀន</p>
              <p className="font-battambang text-gray-500 text-sm">{filtered.length} / {allTeachers.length} នាក់</p>
            </div>
          </div>
          <div className="relative max-w-sm w-full">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="ស្វែងរកតាមឈ្មោះ ឬ ជំនាញ..."
              className="w-full border border-gray-200 focus:border-primary rounded-xl pl-10 pr-4 py-3 font-battambang text-sm outline-none focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>
        </div>

        {/* Grid */}
        {shown.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {shown.map((t) => (
              <div key={t.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-moul text-primary text-xs mb-1 leading-relaxed">{t.name}</h3>
                  <p className="font-battambang text-gray-500 text-xs mb-2">{t.pos}</p>
                  <span className="inline-block font-battambang text-xs bg-blue-50 text-primary px-2.5 py-1 rounded-full border border-blue-100">
                    {t.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FiSearch className="text-gray-300 text-5xl mx-auto mb-4" />
            <p className="font-battambang text-gray-400 text-lg mb-2">រកមិនឃើញ</p>
            <button onClick={() => { setSearch(''); setPage(1) }}
              className="font-battambang text-primary text-sm hover:underline">
              លុបការស្វែងរក
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={() => setPage(p => p - 1)}
              disabled={page === 1}
              className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition-all"
            >
              <FiChevronLeft />
            </button>
            {[...Array(totalPages)].map((_, i) => {
              const p = i + 1
              return (
                <button key={p} onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-xl font-battambang text-sm transition-all
                  ${page === p ? 'bg-primary text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                  {p}
                </button>
              )
            })}
            <button
              onClick={() => setPage(p => p + 1)}
              disabled={page === totalPages}
              className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition-all"
            >
              <FiChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Teacher
