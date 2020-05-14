import React, { Component } from "react";
import styless from '../assets/css/sideLeft.module.css'



class ModalAdd extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                  <h4>Add item</h4>
                <form>
                  <div className={styless.groupForm}>
                      <label className={styless.groupLabel}>Name</label>
                      <input type="text" className={styless.groupInput}/>
                  </div>
                  <div className={styless.groupForm}>
                      <label className={styless.groupLabel}>Image</label>
                      <input type="file" className={styless.groupInput}/>
                  </div>
                  <div className={styless.groupForm}>
                      <label className={styless.groupLabel}>Price</label>
                      <input type="text" className={styless.groupInput}/>
                  </div>
                  <div className={styless.groupForm}>
                      <label className={styless.groupLabel}>Category</label>
                      <select className={styless.groupSelect}>
                          <option value="1">Category</option>
                      </select>
                  </div>
                </form>
              </div>
              <div className={styless.heroBtn}>
                <button
                  type="button"
                  className={styless.groupA}
                  data-dismiss="modal">
                  Cancel
                </button>
                <button type="button"
                className={styless.groupB}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAdd;

