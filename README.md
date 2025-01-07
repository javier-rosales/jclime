# JClime 🌤️  
JClime es una aplicación web diseñada para proporcionar información meteorológica precisa de cualquier parte del mundo. Con una interfaz intuitiva, JClime es la solución ideal para mantenerte informado sobre el clima actual, pronósticos por hora y para los próximos días.  

## Características principales ✨  
- **Búsqueda con autocompletado**: Encuentra localidades, municipios o estados fácilmente con sugerencias inteligentes.  
- **Pronóstico detallado**: Información del clima actual, las próximas horas y los próximos días gracias a la API de Tomorrow.io.  
- **Última ubicación guardada**: Guarda automáticamente tu ubicación preferida en Local Storage para cargarla al iniciar la aplicación.  

## Tecnologías utilizadas 🛠️  
- **Frontend**: React, CSS.  
- **APIs**:  
  - [Tomorrow.io](https://www.tomorrow.io/) para datos meteorológicos.  
  - [Google Places Autocomplete](https://developers.google.com/maps/documentation/places/web-service/place-autocomplete?hl=es-419) para sugerencias de búsqueda.  
  - [Google Place Details](https://developers.google.com/maps/documentation/places/web-service/place-details?hl=es-419) para obtener información específica sobre los lugares seleccionados.  
- **Almacenamiento local**: Local Storage para persistir la última ubicación guardada.  

## Uso 📖
1. Usa la barra de búsqueda para encontrar localidades, municipios o estados.
2. Selecciona una sugerencia para ver el clima actual y el pronóstico.
3. La última ubicación que consultes será guardada automáticamente para la próxima vez que uses la aplicación.