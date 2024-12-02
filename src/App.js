import React, { useState } from 'react';

const App = () => {
  const [idea, setIdea] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Lista de retos
  const retos = [
    {
      reto: "Cena bajo las estrellas en un parque o jardín",
      descripcion: "Organiza una cena romántica al aire libre con luces suaves y velas, disfrutando de una noche bajo las estrellas."
    },
    {
      reto: "Escapada de fin de semana a una cabaña o pueblo cercano",
      descripcion: "Planea una escapada romántica a un lugar tranquilo, perfecto para desconectar y disfrutar de la compañía."
    },
    {
      reto: "Caminata romántica por un sendero en la naturaleza",
      descripcion: "Disfruten de la tranquilidad de la naturaleza mientras caminan juntos por un sendero rodeado de árboles y paisajes."
    },
    {
      reto: "Noche de cine en casa con luces suaves y mantas",
      descripcion: "Prepara un cine en casa con sus películas favoritas, palomitas y una atmósfera acogedora."
    },
    {
      reto: "Clase de cocina juntos para preparar un platillo especial",
      descripcion: "Aprendan a cocinar algo delicioso juntos. Una experiencia divertida y sabrosa que pueden disfrutar."
    },
    {
      reto: "Paseo en bote por un lago o río tranquilo",
      descripcion: "Alquilen un bote y naveguen por un lago o río, disfrutando de la paz y la belleza del paisaje juntos."
    },
    {
      reto: "Sesión de fotos románticas en un lugar pintoresco",
      descripcion: "Capturen recuerdos especiales con una sesión de fotos en un lugar hermoso y romántico."
    },
    {
      reto: "Visitar un observatorio o ver las estrellas juntos",
      descripcion: "Pasen una noche bajo las estrellas, explorando el universo en un observatorio o desde un lugar tranquilo."
    },
    {
      reto: "Ir a un festival o concierto de música en vivo",
      descripcion: "Disfruten de la música y el ambiente de un festival o concierto de su grupo favorito."
    },
    {
      reto: "Paseo por un jardín secreto o parque tranquilo",
      descripcion: "Descubran un lugar escondido lleno de naturaleza y belleza, perfecto para una tarde romántica."
    },
    {
      reto: "Picnic romántico en un parque o en la playa",
      descripcion: "Preparen una cesta de picnic con sus alimentos favoritos y disfruten de una tarde al aire libre."
    },
    {
      reto: "Tener una noche de juegos con juegos de mesa o videojuegos",
      descripcion: "Pasen una noche divertida y competitiva jugando juntos a juegos de mesa o videojuegos."
    },
    {
      reto: "Viaje en coche sin rumbo fijo, explorando nuevos lugares",
      descripcion: "Tomen un coche y sigan su instinto para descubrir nuevos destinos, sin planificar demasiado."
    },
    {
      reto: "Visitar un museo o galería de arte y disfrutar de las obras juntos",
      descripcion: "Exploren arte y cultura en un museo o galería de arte, compartiendo sus impresiones sobre las piezas que más les gusten."
    },
    {
      reto: "Recrear una cita a ciegas sorpresa",
      descripcion: "Sorprendan al otro con una cita a ciegas, planificando todo en secreto para sorprender a su pareja."
    },
    {
      reto: "Ir a una feria o parque de diversiones para disfrutar juntos",
      descripcion: "Pasen una tarde llena de emoción montando en juegos de feria y disfrutando de la comida típica."
    },
    {
      reto: "Ver la puesta de sol desde un lugar especial",
      descripcion: "Encuentren un lugar hermoso para ver el atardecer juntos, compartiendo un momento tranquilo y mágico."
    },
    {
      reto: "Escribir cartas de amor a mano y leerlas en voz alta",
      descripcion: "Escriban cartas a mano expresando sus sentimientos y luego léanlas el uno al otro."
    },
    {
      reto: "Tener una noche de karaoke cantando sus canciones favoritas",
      descripcion: "Disfruten de una noche de karaoke, cantando juntos sus canciones más queridas."
    },
    {
      reto: "Organizar una noche de degustación de vino, queso o chocolate",
      descripcion: "Tengan una noche de degustación probando diferentes vinos, quesos o chocolates, disfrutando de nuevos sabores."
    },
    {
      reto: "Clases de baile (salsa, tango, etc.) para aprender juntos",
      descripcion: "Aprendan a bailar un estilo nuevo, como salsa o tango, y diviértanse en el proceso."
    },
    {
      reto: "Hacer una cápsula del tiempo con recuerdos para abrir en el futuro",
      descripcion: "Reúnan objetos y recuerdos significativos y guárdenlos en una cápsula del tiempo para abrir en el futuro."
    },
    {
      reto: "Día de spa juntos, relajándose con masajes y tratamientos",
      descripcion: "Disfruten de una experiencia de relajación total en un spa, recibiendo masajes y tratamientos rejuvenecedores."
    },
    {
      reto: "Explorar un mercado local o una feria de artesanías",
      descripcion: "Vayan a un mercado local y exploren juntos, comprando recuerdos o probando comida típica."
    },
    {
      reto: "Cita de camping bajo las estrellas, disfrutando de la naturaleza",
      descripcion: "Pasen una noche acampando bajo las estrellas, con una fogata y disfrutando del aire libre."
    },
    {
      reto: "Tomarse el día libre para hacer lo que más les guste juntos",
      descripcion: "Tómense un día libre y disfruten de actividades que les apasionen, como ver películas, cocinar o pasear."
    },
    {
      reto: "Asistir a un taller creativo (cerámica, pintura, fotografía)",
      descripcion: "Participen en un taller creativo y aprendan algo nuevo, ya sea cerámica, pintura o fotografía."
    },
    {
      reto: "Escribir una historia juntos, turnándose para continuarla",
      descripcion: "Escriban una historia juntos, tomando turnos para añadir una parte cada vez, creando algo único."
    },
    {
      reto: "Desafío de cocina: cada uno hace un platillo y eligen al ganador",
      descripcion: "Hagan un desafío de cocina, donde cada uno prepare un platillo y luego elijan al mejor cocinero."
    },
    {
      reto: "Hacer un recorrido por los lugares de la ciudad que nunca han visitado",
      descripcion: "Exploren su ciudad como si fueran turistas, visitando lugares que nunca habían visto antes."
    }
  ];

  // Función para obtener un reto aleatorio
  const getRandomIdea = () => {
    setIsLoading(true);
    try {
      const randomReto = retos[Math.floor(Math.random() * retos.length)];
      setIdea(randomReto.reto);
      setDescription(randomReto.descripcion || 'No hay descripción disponible para esta idea.');
    } catch (error) {
      console.error('Error al obtener la idea de cita:', error);
      setIdea('¡Ups! No pudimos obtener una idea. ¿Por qué no improvisan?');
      setDescription('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Ideas de Citas Aleatorias</h1>
      <div style={styles.card}>
        <h2 style={styles.ideaTitle}>Idea de Cita:</h2>
        <p style={styles.ideaText}>
          {idea || "¡Presiona el botón para obtener una idea de cita!"}
        </p>
        {idea && (
          <>
            <h3 style={styles.descriptionTitle}>Descripción:</h3>
            <p style={styles.descriptionText}>{description}</p>
          </>
        )}
      </div>
      <button 
        style={styles.button}
        onClick={getRandomIdea}
        disabled={isLoading}
      >
        {isLoading ? 'Buscando idea...' : 'Nueva Idea de Cita'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #ffc0cb, #e6e6fa)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
  },
  ideaTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ff69b4',
    marginBottom: '0.5rem',
  },
  ideaText: {
    fontSize: '1.25rem',
    textAlign: 'center',
    color: '#333',
    marginBottom: '1rem',
  },
  descriptionTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#ff69b4',
    marginTop: '1rem',
    marginBottom: '0.5rem',
  },
  descriptionText: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.4',
  },
  button: {
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default App;
