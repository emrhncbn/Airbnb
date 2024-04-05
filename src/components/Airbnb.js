import { useState } from "react"


const apartmentsData =[
    {
      "id": 1,
      "title": "Spacious 2 Bedrooom in Downtown",
      "description": "Beautiful 2-bedroom apartment with lots of natural light and stunning views of the city.",
      "image": "https://media.istockphoto.com/id/1357529193/tr/foto%C4%9Fraf/3d-rendering-of-a-cozy-living-room.jpg?s=612x612&w=0&k=20&c=W5EuYKcFLoFQjovElPSLbIcycpbyJE2h7qfLv8VlTvs=",
      "price": "100",
      "reservedDates": ["2024-04-05", "2024-04-10"]
    },
    {
      "id": 2,
      "title": "Charming Studio in the Taksim",
      "description": "Cozy studio apartment in a quiet neighborhood, perfect for a single person or couple.",
      "image": "https://media.istockphoto.com/id/1373329869/tr/foto%C4%9Fraf/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=0-eXt9ktzi2iyYDxPSPjo4XdqWy9raClCdDXhXSpPgw=",
      "price": "30",
      "reservedDates": ["2024-04-01", "2024-04-31"]
    },
    {
      "id": 3,
      "title": "Tek Odalı",
      "description": "Cozy studio apartment in a quiet neighborhood, perfect for a single person or couple.",
      "image": "https://media.istockphoto.com/id/1461079674/tr/foto%C4%9Fraf/luxury-hotel-room.jpg?s=612x612&w=0&k=20&c=3I59ZR-sqvAh1fiWrWXGhpIY5kds78ydUT7sdBEinpo=",
      "price": "250",
      "reservedDates": ["2024-04-012", "2024-05-12"]
    },
    {
      "id": 4,
      " title": "Modern 212 Suites in Ataşehir ",
      "description": "Cozy studio apartment in a quiet neighborhood, perfect for a single person or couple.",
      "image": "https://media.istockphoto.com/id/1357529184/tr/foto%C4%9Fraf/3d-render-of-a-contemporary-living-room-interior.jpg?s=612x612&w=0&k=20&c=Si8HjwaVJVMrS6F_s3fQMXpJS7BgtVTgMcaqE1Xa4Ck=",
      "price": "150",
      "reservedDates": ["2024-05-05", "2024-05-10"]
    },
    {
      "id": 5,
      "title": "Cadde Evler",
      "description": "Cozy studio apartment in a quiet neighborhood, perfect for a single person or couple.",
      "image": "https://media.istockphoto.com/id/1370825295/tr/foto%C4%9Fraf/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window.jpg?s=612x612&w=0&k=20&c=bJTktO1Zszsb2rHi5ssMnepvQ4dHD5oyaVh437j2mjE=",
      "price": "50",
      "reservedDates": ["2024-05-01", "2024-05-04"]
    },
    {
      "id": 6,
      "title": "Maya Evler Sahil yolu",
      "description": "Cozy studio apartment in a quiet neighborhood, perfect for a single person or couple.",
      "image": "https://media.istockphoto.com/id/1357529933/tr/foto%C4%9Fraf/digitally-generated-image-of-a-fully-furnished-living-room.jpg?s=612x612&w=0&k=20&c=Dlcah4mDOQe4Nh1Au7vfAB_OEdnex0SiUUsr6w-Y_Z4=",
      "price": "300",
      "reservedDates": ["2024-05-15", "2024-05-25"]
    },
    {
      "id": 7,
      "title": "Samanyolu Odabasi",
      "description": "Cozy studio apartment in a quiet neighborhood, perfect for a single person or couple.",
      "image": "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "price": "300",
      "reservedDates": ["2024-04-01", "2024-08-10"]
    },
    {
      "id": 8,
      "title": " Besiktas Manhattan ",
      "description": "Cozy studio apartment in a quiet neighborhood, perfect for a single person or couple.",
      "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "price": "300",
      "reservedDates": ["2024-01-01", "2025-12-31"]
    }
  ]
  const ApartmentListings = ({apartments,viewDetails,selectedApartment}) => (
    <div className="apartment-listings">
    {apartments.map((apartment) => (
      <div key={apartment.id} className="apartment-card">
        <img src={apartment.image} alt={apartment.title} />
        <div className="apartment-info">
        <h2>{apartment.title}</h2>
        {apartment === selectedApartment && (
            <div>
              <p>{apartment.description}</p>
              <p>${apartment.price} / Night</p>
            </div>
          )}
        <button onClick={() => viewDetails(apartment)}>View Details</button>
        </div>
      </div>
    ))}
  </div>
  )
const Airbnb = () => {
    const [apartments, setApartments] = useState(apartmentsData)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [selectedApartment, setSelectedApartment] = useState(null)


    const handleStartDateChange = (event) =>{
        setStartDate(event.target.value)
    }
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value)
    }

    const filterApartments = () => {
      const filtered = apartments.filter((apartment) => {
        // Eğer başlangıç ve bitiş tarihleri belirlenmişse
        if (startDate && endDate) {
          // Seçili apartmanın rezerve edilmemiş olduğu tarihlerin sayısını kontrol et
          const availableDates = apartment.reservedDates.filter((date) => {
            return (date < startDate || date > endDate)
          });
          // Eğer rezerve edilmemiş tarihler varsa, bu apartmanı filtreler içine al
          return availableDates.length === apartment.reservedDates.length
        }
        // Eğer tarihler belirlenmemişse, tüm apartmanları göster
        return true
      })
      return filtered
     }
      const handleSearch = () => {
        const filtered = filterApartments();
        setApartments(filtered);
      }

      const viewDetails = (apartment) => {
        // Seçili daire zaten varsa ve tekrar aynı daireye tıklanıyorsa, seçimi kaldır
        if (selectedApartment && selectedApartment.id === apartment.id) {
        setSelectedApartment(null)
      } else {
        setSelectedApartment(apartment)
      }
        // setSelectedApartment(apartment);
      }

  return (
    <div>
      <h1>Airbnb</h1>
      <div>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ApartmentListings apartments={apartments} viewDetails={viewDetails} selectedApartment={selectedApartment} />
    </div>
  )
}

export default Airbnb