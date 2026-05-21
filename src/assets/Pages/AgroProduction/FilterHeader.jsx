import React from 'react'
import { IoPrintOutline } from "react-icons/io5";
import {divisionsInfo, yearsInfo, sessionInfo, districtsInfo, upazilaInfo} from "../../data/data.js"

const FilterHeader = ({filterInfo}) => {

    const {    
    division, 
    districtList, 
    upazilaList, 

    handleDivision,
    handleDistrict,
    handleUpazila} = filterInfo

    const f_years = yearsInfo
    const sessions = sessionInfo
    const divisions = divisionsInfo
    const districts = districtsInfo
    const upazila = upazilaInfo
    
    
  return (
          <section className="bg-white px-4 py-2 mb-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="text-sm text-slate-600">
                  <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize">
                    <option value="">Years</option>
                    {f_years.map((fyear)=>                    
                    <option key={fyear.id} value={fyear.fyearId}>{fyear.fyearId}</option>
                    )}
                  </select>
                </div>
                <div className="text-sm text-slate-600">
                  <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize">
                    <option value="">session</option>
                    {sessions.map((session)=>                     
                    <option key={session.id} value={session.sessionId}>{session.sessionId}</option>
                    )}
                  </select>
                </div>
                {/* Division */}
                <div className="text-sm text-slate-600">
                  <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize"
                  onChange={(e)=> handleDivision(e.target.value)}>
                    <option value="">division</option>
                    {division?.map((item)=> 
                    <option key={item} value={item}>{item}</option>
                    )}
                  </select>
                </div>
                {/* District */}
                {districtList.length> 0 && 
                <div className="text-sm text-slate-600">
                  <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize"
                  onChange={(e)=>handleDistrict(e.target.value)}
                  >
                    <option value="">district</option>
                    {districtList.map((district)=>
                    <option key={district} value={district}>{district}</option>
                    )}
                  </select>
                </div>
                }
                {/* Upazila */}
                {upazilaList.length > 0 && 
                <div className="text-sm text-slate-600">
                  <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize"
                  onChange={(e)=>handleUpazila(e.target.value)}
                  >
                    <option value="">upazila</option>
                    {upazilaList.map((upazila)=>
                    <option key={upazila} value={upazila}>{upazila}</option>
                    )}
                  </select>
                </div>
                }
              </div>
    
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer">
                  Export CSV
                </button>
                <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer">
                  <IoPrintOutline className="text-xl" />
                </button>
              </div>
            </div>
          </section>
  )
}

export default FilterHeader