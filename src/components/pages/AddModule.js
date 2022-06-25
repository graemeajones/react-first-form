import ModuleForm from '../entities/Modules/ModuleForm';


export default function MyAssessments({ onSubmit, onCancel }) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <>
      <h1>Add a new module</h1>
      <section>
        <ModuleForm onSubmit={onSubmit} onCancel={onCancel} className="Bordered"/>
      </section>
    </>
  )
}
