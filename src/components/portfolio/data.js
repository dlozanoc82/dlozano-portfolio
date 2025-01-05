import encriptadorProject from "../../assets/encriptador-project.png"
import littleProject from "../../assets/little-project.png"
import dashboardProject from "../../assets/dashboard-crm.png"
import ecommerceProject from "../../assets/ecommerce-muebles.png"
import planificadorProject from "../../assets/planificador-project.png"
import Work5 from "../../assets/Work5.jpg"
import nucleusProject from "../../assets/nucleus-project.png"

export const projectsData = [
    {
      id: 1,
      image: nucleusProject,
      title: "Nucleus eWallet",
      category: "web",
      description: "Este proyecto es un sitio web desarrollado con HTML y CSS para Nucleus eWallet, una plataforma de pagos electrónicos. El sitio web consta de las siguientes secciones: Encabezado, Acerca de nosotros, Funciones principales, Acerca de las comisiones, Testimonios y Pie de página.",
      tech: ["HTML", "CSS", "Responsive Design"],
      demoUrl: "https://nucleus-ewallet-page.netlify.app/",
      codeUrl: "https://github.com/dlozanoc82/nucleus-ewallet",
    },
    {
      id: 2,
      image: dashboardProject,
      title: "CRM Dashboard",
      category: "app",
      description: "CRM Dashboard es una aplicación web que ofrece una interfaz de usuario intuitiva para la gestión de datos relacionados con clientes, equipos, contactos, facturas y más. La aplicación incluye gráficas interactivas, un sistema de navegación avanzado y componentes estilizados con un enfoque en la experiencia del usuario.",
      tech: ["React", "Material UI", "Data Grid", "Dark & Ligth Mode"],
      demoUrl: "https://crm-dashboard-alpha.vercel.app/",
      codeUrl: "https://github.com/dlozanoc82/crm-dashboard",
    },
    {
      id: 3,
      image: ecommerceProject,
      title: "Tienda Muebles",
      category: "web",
      description: "Maquetación de una página web para una tienda virtual de muebles. Utiliza HTML y CSS para crear una interfaz de usuario atractiva y fácil de usar",
      tech: ["HTML", "CSS", "Rsponsive Design", "Grid", "Flexbox"],
      demoUrl: "https://t-muebles-practica.netlify.app/",
      codeUrl: "https://github.com/dlozanoc82/tienda-muebles",
    },
    {
      id: 4,
      image: planificadorProject,
      title: "App Control de Gastos",
      category: "app",
      description: "Este proyecto es una aplicación web creada con ReactJS para el control de gastos personales. Permite definir un presupuesto y realizar un seguimiento de los gastos en diferentes categorías. También proporciona estadísticas sobre el porcentaje del presupuesto gastado y el presupuesto disponible.",
      tech: ["React", "CSS", "JavaScript"],
      demoUrl : "https://app-control-gastos.vercel.app/",
      codeUrl: "https://github.com/dlozanoc82/app-control-gastos",
    },
    {
      id: 5,
      image: littleProject,
      title: "Little Lemon Restaurant",
      category: "app",
      description: "Este proyecto fue creado como parte del curso Meta Frontend Developer. Está construido con React y proporciona una interfaz elegante para que los usuarios exploren el menú del restaurante y hagan reservas.",
      tech: ["React", "CSS", "JavaScript"],
      demoUrl: "https://little-lemon-gilt.vercel.app/",
      codeUrl: "https://github.com/dlozanoc82/little-lemon",
    },
];

export const projectsNav = [
    {
        name: 'all'
    },
    {
        name: 'web'
    },
    {
        name: 'app'
    },
]
