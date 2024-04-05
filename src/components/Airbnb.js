import { useState } from "react"
import Data from "./Data"




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
    const [apartments, setApartments] = useState(Data)
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
      const apartmentsCopy = [...apartments]
      
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