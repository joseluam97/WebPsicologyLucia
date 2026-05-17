import React, { useEffect } from 'react';

const Doctoralia = () => {
    useEffect(() => {
        // 1. Definimos la función que carga el widget
        const scriptId = 'zl-widget-s';

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "//platform.docplanner.com/js/widget.js";
            script.async = true;
            document.body.appendChild(script);
        } else {
            // Si el script ya existe (por navegación interna), 
            // a veces es necesario reinicializar el widget de Doctoralia
            if (window.ZlWidget) {
                window.ZlWidget.init();
            }
        }
    }, []);

    return (
        <section>
            {/* 2. El enlace que Doctoralia usa como "ancla" para renderizar el widget */}
            <a
                id="zl-url"
                className="zl-url"
                href="https://www.doctoralia.es/lucia-morales-2/psicologo/vejer-de-la-frontera"
                rel="nofollow"
                data-zlw-doctor="lucia-morales-2"
                data-zlw-type="big_with_calendar"
                data-zlw-opinion="false"
                data-zlw-hide-branding="true"
                data-zlw-saas-only="false"
                data-zlw-a11y-title="Widget de reserva de citas médicas"
            >
                Reserve una cita
            </a>
        </section>
    );
};

export default Doctoralia;