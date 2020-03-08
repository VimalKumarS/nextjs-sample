import Modal from './modal'
import ModalCreateForm from './movieCreateForm'

const SideMenu = (props) => {
  return (
   <div>
     <Modal>
       <ModalCreateForm />
     </Modal>
     <h1 className="my-4">Categories</h1>
      <div className="list-group">
        { props.categories.map(c => (
            <a key={c.id}
               href="#"
               className="list-group-item">{c.name}
            </a>
          ))
        }
      </div>
   </div>
  )
}

export default SideMenu