"use client"

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import {
  MdLayers,
  MdChecklist,
  MdWifi,
  MdVideoLabel,
  MdAcUnit,
  MdDraw,
  MdHeadphones,
  MdUsb,
  MdLocalCafe,
  MdLocalParking,
 
} from "react-icons/md";

const AMENITIES = [
  { value: "wifi",       label: "Wi-Fi",      icon: <MdWifi /> },
  { value: "projector",  label: "Projector",  icon: <MdVideoLabel /> },
  { value: "ac",         label: "AC",         icon: <MdAcUnit /> },
  { value: "whiteboard", label: "Whiteboard", icon: <MdDraw /> },
  { value: "soundproof", label: "Soundproof", icon: <MdHeadphones /> },
  { value: "usbc",       label: "USB-C",      icon: <MdUsb /> },
  { value: "coffee",     label: "Coffee",     icon: <MdLocalCafe /> },
  { value: "parking",    label: "Parking",    icon: <MdLocalParking /> },
];

const MAX_CHIPS = 3;
const FLOORS = [1, 2, 3, 4, 5];

export default function RoomForm() {
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const toggleAmenity = (value) => {
    setSelectedAmenities((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const visibleChips = selectedAmenities.slice(0, MAX_CHIPS);
  const overflowCount = selectedAmenities.length - MAX_CHIPS;

   const {data:session}=authClient.useSession()
const email=session?.user.email

  const handleSubmit =async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

     const data = {
      name:         formData.get("name"),
      image:         formData.get("image"),
      description:  formData.get("description"),
      floor:        formData.get("floor"),
      capacity_min: formData.get("capacity_min"),
      capacity_max: formData.get("capacity_max"),
      hourly_rate:  formData.get("hourly_rate"),
      amenities:    selectedAmenities,
   
    };
  console.log(data);
  const res=await fetch(`http://localhost:5000/studyrooms`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)

  })
  const req=await res.json()

  const myList=await fetch(`http://localhost:5000/mylistingdata`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
      ...data,
    email
  })

  })
  const ListReq=await myList.json()

  console.log(ListReq);
  };

  const handleReset = () => {
    setSelectedAmenities([]);
  };

  return (
    <div className="max-w-xl mx-auto p-6 border-2 border-red-400 rounded-2xl my-10">
        <h1 className="text-3xl my-4 font-semibold">Add Study Rooms</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
 {/* Room Name */}
        <div className="form-control mb-4">
          <label className="label pb-1" htmlFor="room-name">
            <span className="label-text font-medium flex items-center gap-1.5">
          
              Room name
            </span>
            <span className="label-text-alt text-error">Required</span>
          </label>
          <input
            id="room-name"
            type="text"
            required
            name="name"
            placeholder="e.g. Horizon Suite"
            className="input input-bordered w-full"
            maxLength={80}
          />
        </div>

        {/* Room Image */}
       <div className="form-control mb-4">
          <label className="label pb-1" htmlFor="room-image">
            <span className="label-text font-medium flex items-center gap-1.5">
          
              Room Image
            </span>
            <span className="label-text-alt text-error">Required</span>
          </label>
          <input
            id="room-image"
            type="url"
            name="image" 
            required
            placeholder="Paste Image URL"
            className="input input-bordered w-full"
            maxLength={80}
          />
        </div>

        {/* Short Description */}
        <div className="form-control mb-4">
          <label className="label pb-1" htmlFor="room-description">
            <span className="label-text font-medium flex items-center gap-1.5">
         
              Short description
            </span>
            <span className="label-text-alt text-base-content/40 text-xs">Max 100 characters</span>
          </label>
          <textarea
            id="room-description"
             required
            name="description"
            placeholder="Brief description of the room…"
            className="textarea textarea-bordered w-full"
            rows={2}
            maxLength={100}
          />
        </div>

        {/* Floor + Seat Capacity */}
        <div className="grid grid-cols-2 gap-4 mb-4">

          <div className="form-control">
            <label className="label pb-1" htmlFor="room-floor">
              <span className="label-text font-medium flex items-center gap-1.5">
                <MdLayers className="text-base-content/50 text-lg" />
                Floor
              </span>
              <span className="label-text-alt text-error">Required</span>
            </label>
            <select
              id="room-floor"
               required
              name="floor"
              className="select select-bordered w-full"
              defaultValue=""
            >
              <option value="" disabled>Select floor</option>
              {FLOORS.map((f) => (
                <option key={f} value={f}>Floor {f}</option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label pb-1">
              <span className="label-text font-medium flex items-center gap-1.5">
        
                Seat capacity
              </span>
              <span className="label-text-alt text-error">Required</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                 required
                name="capacity_min"
                placeholder="Min"
                className="input input-bordered w-full text-center"
                min={1}
                max={99}
              />
              <span className="text-base-content/40 text-sm shrink-0">–</span>
              <input
                type="number"
                 required
                name="capacity_max"
                placeholder="Max"
                className="input input-bordered w-full text-center"
                min={1}
                max={99}
              />
            </div>
          </div>

        </div>

       <div className="flex gap-4 items-center">
         {/* Hourly Rate */}
        <div className="form-control mb-4">
          <label className="label pb-1" htmlFor="room-rate">
            <span className="label-text font-medium flex items-center gap-1.5">
            
              Hourly rate
            </span>
            <span className="label-text-alt text-error">Required</span>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <span className="text-base-content/40">$</span>
            <input
              id="room-rate"
              type="number"
               required
              name="hourly_rate"
              placeholder="0.00"
              step="0.01"
              min={0}
              className="input"
            />
            <span className="text-base-content/40 text-xs">/hr</span>
          </label>
        </div>
      
       </div>
        {/* Amenities */}
        <div className="form-control mb-6">
          <label className="label pb-1">
            <span className="label-text font-medium flex items-center gap-1.5">
              <MdChecklist className="text-base-content/50 text-lg" />
              Amenities
            </span>
            <span className="label-text-alt text-base-content/40 text-xs">
              Select all that apply
            </span>
          </label>

          {/* Selected chips preview */}
          {selectedAmenities.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-3 p-3 bg-base-200 rounded-xl min-h-10">
              {visibleChips.map((value) => {
                const amenity = AMENITIES.find((a) => a.value === value);
                return (
                  <span
                    key={value}
                    className="badge badge-neutral text-neutral-content gap-1.5 px-2.5 py-3 text-xs font-medium"
                  >
                    <span className="text-sm">{amenity.icon}</span>
                    {amenity.label}
                    <button
                      type="button"
                      onClick={() => toggleAmenity(value)}
                      className="ml-0.5 hover:opacity-70"
                      aria-label={`Remove ${amenity.label}`}
                    >
               
                    </button>
                  </span>
                );
              })}
              {overflowCount > 0 && (
                <span className="badge badge-outline text-base-content/60 px-2.5 py-3 text-xs font-medium">
                  +{overflowCount} more
                </span>
              )}
            </div>
          )}

          {/* Checkbox list */}
          <div className="border border-base-300 rounded-xl overflow-hidden flex flex-wrap divide-base-200">
            {AMENITIES.map(({ value, label, icon }) => {
              const checked = selectedAmenities.includes(value);
              return (
                <label
                  key={value}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition hover:bg-base-200 ${
                    checked ? "bg-base-200" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                     required
                    className="checkbox checkbox-sm checkbox-neutral"
                    checked={checked}
                    
                    onChange={() => toggleAmenity(value)}
                  />
                  <span className="text-lg text-base-content/60">{icon}</span>
                  <span className="text-sm font-medium">{label}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button type="reset" className="btn btn-ghost flex-1">
            Reset
          </button>
          <button type="submit" className="btn btn-outline flex-1">
            Save Room
          </button>
        </div>

      </form>
    </div>
  );
}

