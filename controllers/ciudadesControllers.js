const Ciudad = require('../models/Ciudad');

const ciudadesControllers = {

    obtenerTodas: async (req,res)=>{
      let ciudades
      let error = null
      try{
          ciudades = await Ciudad.find()
      }catch(error){
        error = error
        console.log(error)
      }
       res.json({
         respuesta: error ? 'ERROR' : ciudades,
         success: error ? false : true,
         error: error
       })
    },
    obtenerUnaCiudad : async(req,res)=>{

      let ciudad
      const id = req.params.id
      try{
        ciudad = await Ciudad.findOne({_id:id})
      }catch(error){
        console.log(error);
      }

        res.json({respuesta:ciudad,success:true})
    },

    borrarCiudad : async(req,res)=>{

      const id = req.params.id
      let ciudades
      try {
        await Ciudad.findOneAndDelete({_id:id})
        ciudades = await Ciudad.find()
      } catch (error) {
        console.log(error);
      }
      res.json({respuesta:ciudades,success:true})
    },

    modifarCiudad : async(req,res)=>{

      let id = req.params.id
      let ciudad = req.body
      let actualizado

      try {
          actualizado = await Ciudad.findOneAndUpdate({_id:id},ciudad)
      } catch (error) {
        console.log(error)
      }
      res.json({success:actualizado ? true : false})
    },
    cargarUnaCiudad: async(req,res)=>{
      const { ciudad,pais,descripcion,imagen} = req.body

      new Ciudad({ciudad,pais,descripcion,imagen}).save()
      .then(respuesta => res.json({respuesta}))
    }


}
module.exports = ciudadesControllers