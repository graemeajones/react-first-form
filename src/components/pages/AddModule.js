import ModuleForm from '../entities/Modules/ModuleForm';


export default function AddModule() {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------

  // View ----------------------------------------
  return (
    <>
      <h1>Add a new module</h1>
      <section>
        <ModuleForm  className="Bordered"/>
      </section>
    </>
  )
}
