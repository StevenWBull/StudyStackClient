// hooks/useSweetAlert.js
import Swal from 'sweetalert2';

/**
 * useSweetAlert Custom Hook for SweetAlert2 Integration
 *
 * @function showAlert
 * @param {Object} options - SweetAlert2 configuration options
 * @param {string} options.title - The title of the modal.
 * @param {string} [options.text] - A description for the modal. Plain text or HTML.
 * @param {string} [options.html] - A HTML description for the modal.
 * @param {('warning'|'error'|'success'|'info'|'question')} [options.icon] - Icon type for the modal.
 * @param {string} [options.confirmButtonText] - Text for the confirm button.
 * @param {boolean} [options.showCancelButton] - If true, shows a cancel button.
 * @param {string} [options.cancelButtonText] - Text for the cancel button.
 * @param {string} [options.footer] - Footer text or HTML for the modal.
 * @param {boolean|string} [options.backdrop] - Backdrop configuration for the modal.
 * @param {boolean} [options.toast] - If true, displays a toast instead of modal.
 * @param {('top'|'top-start'|'top-end'|'center'|'center-start'|'center-end'|'bottom'|'bottom-start'|'bottom-end')} [options.position] - Position of the toast or modal.
 * @param {number} [options.timer] - Auto close timer of the modal in milliseconds.
 * ... More parameters can be found in the official SweetAlert2 documentation.
 *
 * @returns {Object} - Object containing the showAlert function.
 */

const useSweetAlert = () => {
    const showAlert = (options) => {
        Swal.fire(options);
    };

    return {
        showAlert,
    };
};

export default useSweetAlert;
