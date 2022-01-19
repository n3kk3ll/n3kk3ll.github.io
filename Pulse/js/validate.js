$(function () {
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите Ваше имя",
                    minlength: jQuery.validator.format("Минимальная длина {0} символа!")
                },
                phone: "Пожалуйста, введите Ваш номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Введите почту в формате name@domain.com"
                }
            }
        });
    };

    validateForms('#consultation form');
    validateForms('#order form');
    validateForms('#consultation-form');
});