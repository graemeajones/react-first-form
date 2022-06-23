import AddModuleForm from '../entities/Modules/AddModuleForm';


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
        <AddModuleForm onSubmit={onSubmit} onCancel={onCancel} className="Bordered"/>
      </section>
    </>
  )
}
