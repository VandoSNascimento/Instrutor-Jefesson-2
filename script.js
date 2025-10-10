//JavaScript para Interatividade -->
    <script>
        // Função para mostrar/esconder o menu mobile
        document.getElementById('menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu')
            menu.classList.toggle('hidden');
        })

        // Simulação de envio de formulário
        function handleFormSubmit(event) {
            event.preventDefault()
            const submitButton = document.getElementById('submit-button');
            const buttonText = document.getElementById('button-text');
            const loadingSpinner = document.getElementById('loading-spinner');
            const responseMessage = document.getElementById('response-message');

            // 1. Mostrar estado de carregamento
            buttonText.textContent = 'Enviando...';
            loadingSpinner.classList.remove('hidden');
            submitButton.disabled = true;
            responseMessage.textContent = ''; // Limpa mensagens anteriores
            responseMessage.classList.remove('text-red-500', 'text-accent-yellow');

            // 2. Simular a requisição de rede (demora 2 segundos)
            setTimeout(() => {
                // 3. Simular sucesso
                loadingSpinner.classList.add('hidden')
                buttonText.textContent = 'Mensagem Enviada!'
                submitButton.disabled = false;
                
                responseMessage.textContent = '✅ Obrigado! Sua mensagem foi enviada. Responderemos em breve pelo seu e-mail.';
                responseMessage.classList.add('text-accent-yellow');

                // Opcional: Limpar o formulário após sucesso
                document.getElementById('nome').value = '';
                document.getElementById('email').value = '';
                document.getElementById('mensagem').value = '';

                // Resetar o texto do botão após alguns segundos
                setTimeout(() => {
                    buttonText.textContent = 'Enviar Contato'
                }, 4000)

            }, 2000)
        }

        // Função para fechar o menu mobile ao clicar em um link
        const mobileLinks = document.querySelectorAll('#mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobile-menu').classList.add('hidden');
            })
        });

        // Função para smooth scroll nos links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            })
        });
    </script>