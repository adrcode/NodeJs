//1. ʹ�� require ָ�������� http ģ�飬����ʵ������ HTTP ��ֵ������ http
var http = require('http');

//2. ʹ�� http.createServer() ������������������ʹ�� listen ������ 8888 �˿ڡ� ����ͨ�� request, response ���������պ���Ӧ����
http.createServer(function(request, response) {
	// ���� HTTP ͷ�� 
	// HTTP ״ֵ̬: 200 : OK
	// ��������: text/plain	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	//// ������Ӧ���� "Hello World"
	response.end('Hello World\n');
}).listen(8888);

// �ն˴�ӡ������Ϣ
console.log('Server running at http://127.0.0.1:8888/');


