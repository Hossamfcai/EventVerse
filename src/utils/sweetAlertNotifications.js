import Swal from "sweetalert2";

export const showLoginSuccessAlert = (title, message) => {
  return Swal.fire({
    title: `Welcome Back, ${title}`,
    text: message,
    icon: "success",
    timer: 1000,
    timerProgressBar: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    // Styling applied according to the Warm Stone Editorial design system
    customClass: {
      popup: "rounded-3xl bg-[#ffffff] border border-[#e7e5e4] shadow-2xl p-6",
      title: "font-plus-jakarta text-xl font-semibold text-[#1c1917]",
      htmlContainer: "font-plus-jakarta text-sm text-[#57534E]",
      timerProgressBar: "bg-[#15803D]", // Success / Validated green from design system
    },
    // Custom inline styles for color accents (matching design system tokens)
    background: "#ffffff",
    color: "#1c1917",
    iconColor: "#15803D", // Success color (#15803D)
  });
};
