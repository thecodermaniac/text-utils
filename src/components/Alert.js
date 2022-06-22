import React from 'react'
export default function Alert(params) {
    return (

        params.alerts && <div className={`alert alert-${params.alerts.type} alert-dismissible fade show`} role="alert">
            <strong>{params.alerts.type}</strong> : {params.alerts.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}