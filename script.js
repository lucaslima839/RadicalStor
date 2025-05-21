
function comprar(produto) {
    const telefone = '5511977813729';
    const mensagem = `Olá! Tenho interesse na ${produto}. Pode me passar mais informações?`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
