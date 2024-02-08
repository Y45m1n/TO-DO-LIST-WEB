<?php
$host = "localhost";
$port = "5432";
$dbname = "todos";
$user = "postgres";
$password = "postgres";

try {
    // Conecta ao banco de dados
    $conn = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");
    
    // Configura para exibir os erros do PDO
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Mensagem de sucesso se a conexão for estabelecida
    echo "Conexão realizada com sucesso";
    // Adiciona mensagem ao console do navegador
    echo '<script>console.log("Conexão realizada com sucesso")</script>';
} catch(PDOException $e) {
    // Em caso de erro, exibe a mensagem de erro
    echo "Erro na conexão: " . $e->getMessage();
    // Adiciona mensagem ao console do navegador
    echo '<script>console.error("Erro na conexão: ' . $e->getMessage() . '")</script>';
}
?>