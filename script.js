document.getElementById("emitirNota").addEventListener("click", function gerarNotaFiscal() {
    // Coleta os valores dos inputs
    const valorVenda = parseFloat(document.getElementById("valorVenda").value);
    const itens = document.getElementById("itens").value;
    const irpf = parseFloat(document.getElementById("irpf").value);
    const pis = parseFloat(document.getElementById("pis").value);
    const cofins = parseFloat(document.getElementById("cofins").value);
    const inss = parseFloat(document.getElementById("inss").value);
    const issqn = parseFloat(document.getElementById("issqn").value);

    // Cálculos dos impostos
    const valorIrpf = valorVenda * (irpf / 100);
    const valorPis = valorVenda * (pis / 100);
    const valorCofins = valorVenda * (cofins / 100);
    const valorInss = valorVenda * (inss / 100);
    const valorIssqn = valorVenda * (issqn / 100);

    // Soma dos impostos
    const totalImpostos = valorIrpf + valorPis + valorCofins + valorInss + valorIssqn;

    // Formata os valores com vírgula
    const formatarBRL = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Exibe a Nota Fiscal
    document.getElementById("valorVendaNF").textContent = formatarBRL(valorVenda);
    document.getElementById("itensNF").textContent = itens;
    document.getElementById("irpfNF").textContent = `${formatarBRL(valorIrpf)} (${irpf}%)`;
    document.getElementById("pisNF").textContent = `${formatarBRL(valorPis)} (${pis}%)`;
    document.getElementById("cofinsNF").textContent = `${formatarBRL(valorCofins)} (${cofins}%)`;
    document.getElementById("inssNF").textContent = `${formatarBRL(valorInss)} (${inss}%)`;
    document.getElementById("issqnNF").textContent = `${formatarBRL(valorIssqn)} (${issqn}%)`;
    document.getElementById("totalImpostosNF").textContent = formatarBRL(totalImpostos);

    // Exibe o div da nota fiscal
    document.getElementById("notaFiscal").style.display = "block";
});
