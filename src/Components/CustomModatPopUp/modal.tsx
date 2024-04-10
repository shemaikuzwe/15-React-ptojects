export default function Modal({id,header,body,footer,onClose}){
    return<div id={id ||'modal'} className="modal">
     <div className="modal-content">
         <span className="close-modal-icon" onClick={onClose}>&times;</span>
         <div className="header"><h2>{header ? header:"header"}</h2></div>
         <div className="body">{body? body:"body"}</div>
         <div className="footer">{footer? footer :"footer"}</div>
     </div>
    </div>

}