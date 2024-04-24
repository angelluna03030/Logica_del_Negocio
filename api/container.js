const { StudentBusiness, TeacherBusiness, CourseBusiness,RegistrationBusiness,SectionBusiness,SubjectBusiness } = require("../../../Persistencia_de_Datos/domain");const { StudentService, TeacherService, CourseService } = require("../../../Persistencia_de_Datos/services");const { StudentRepository, TeacherRepository, CourseRepository,RegistrationRepository,SectionRepository } = require("../../../Persistencia_de_Datos/dal/repositories"); const db = require("../../../Persistencia_de_Datos/dal/models");
// container.js

const { createContainer, asClass, asFunction, asValue } = require('awilix');
const axios = require('axios');


  // app start
  const StartUp = require("./startup");
  const Server = require("./server");

  const config = require("../config/environments");
  const {StudenttService, TeacherrService, CourrseService } =  axios.get('https://persistencia-de-datos.vercel.app/services');
  const { StudenttRepository, TeacherrRepository, CourserRepository, RegistrationnRepository, SectionnRepository } =  axios.get('https://persistencia-de-datos.vercel.app/dal/repositories');

const { StudenntBusiness, TeacherrBusiness, CourseBusineess } =  axios.get('https://persistencia-de-datos.vercel.app/domain');
  // routes
  const Routes = require("../api/routes");
  const StudentRoutes = require("../api/routes/student.routes");
  const TeacherRoutes = require("../api/routes/teacher.routes");
  const CourseRoutes = require("../api/routes/course.routes");

  // business domain
 
  const { StudentController, TeacherController, CourseController } = require("../api/controllers");

  // controllers

  const container = createContainer();

  container
    .register({
      app: asClass(StartUp).singleton(),
      router: asFunction(Routes).singleton(),
      server: asClass(Server).singleton(),
      StudentController: asClass(StudentController).singleton(),
      StudentRoutes: asFunction(StudentRoutes).singleton(),
      TeacherController: asClass(TeacherController).singleton(),
      TeacherRoutes: asFunction(TeacherRoutes).singleton(),
      CourseController: asClass(CourseController).singleton(),
      CourseRoutes: asFunction(CourseRoutes).singleton()
    })
    .register({
      config: asValue(config)
    })
    .register({
      db: asValue(db)
    })
    .register({
      StudentService: asClass(StudentService).singleton(),
      TeacherService: asClass(TeacherService).singleton(),
      CourseService: asClass(CourseService).singleton()
    })
    .register({
      StudentRepository: asClass(StudentRepository).singleton(),
      TeacherRepository: asClass(TeacherRepository).singleton(),
      CourseRepository: asClass(CourseRepository).singleton(),
      RegistrationRepository: asClass(RegistrationRepository).singleton(), // Registro del repositorio de Registration
      SectionRepository: asClass(SectionRepository).singleton() // Registro del repositorio de Section
    })
    .register({
      StudentBusiness: asClass(StudentBusiness).singleton(),
      TeacherBusiness: asClass(TeacherBusiness).singleton(),
      CourseBusiness: asClass(CourseBusiness).singleton(),
      RegistrationBusiness: asClass(RegistrationBusiness).singleton(), // Registro del business de Registration
      SectionBusiness: asClass(SectionBusiness).singleton(), // Registro del business de Section
      SubjectBusiness: asClass(SubjectBusiness).singleton() // Registro del business de Subject (si es necesario)
    });




module.exports = container;
