export function SignUp() {
    return (
        <form>
            <div>
                <img src="" alt="logomarca do food explorer" />
                <h1>food explorer</h1>
            </div>
            <div>
                <label htmlFor="text_name">Seu nome</label>
                <input type="text" placeholder="Exemplo: Maria da Silva" />
                <label htmlFor="text_email">Email</label>
                <input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
                <label htmlFor="text_password">Senha</label>
                <input type="password" placeholder="No mínimo 6 caracteres" />
                <button>Criar conta</button>
                <a href="/">Já tenho uma conta</a>
            </div>
        </form>
    );
};
