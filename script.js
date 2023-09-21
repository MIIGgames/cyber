document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const gerar2viaButton = document.getElementById("gerar2via");

    gerar2viaButton.addEventListener("click", function () {
        const contribuinte = document.getElementById("contribuinte").value;
        const parcela = document.getElementById("parcela").value;
        const ano = document.getElementById("ano").value;
        const codigoImagem = document.getElementById("codigoImagem").value;

        // Verifica se o código da imagem é "fheg" ou "FHEG"
        if (codigoImagem.toLowerCase() === "fheg") {
            const mensagem = `Número do Contribuinte: ${contribuinte}%0AParcela a ser impressa: ${parcela}%0AAno de Exercício (AAAA): ${ano}%0ACódigo da imagem: ${codigoImagem}`;
            const whatsappLink = `https://api.whatsapp.com/send?phone=5511954988162&text=${mensagem}`;
            window.location.href = whatsappLink;
        } else {
            alert("O campo 'Código da imagem' está incorreto. Por favor, insira 'o código da imagem correto.");
        }
    });
});
