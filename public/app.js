//JQUERY
$(document).ready(function() {
    $('#agendamentoForm').submit(function(event) {
        event.preventDefault();
        
        const nome = $('#nome').val();
        const data = $('#data').val();
        const hora = $('#hora').val();

        if (!nome || !data || !hora) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const agendamento = {
            nome: nome,
            data: data,
            hora: hora
        };

        const agendamentoHtml = `<li class="list-group-item">
                                    <strong>Nome:</strong> ${agendamento.nome} <br>
                                    <strong>Data:</strong> ${agendamento.data} <br>
                                    <strong>Hora:</strong> ${agendamento.hora}
                                </li>`;
                                
        $('#listaAgendamentos').append(agendamentoHtml);

        // Limpar formulário
        $('#agendamentoForm')[0].reset();
    });
});
