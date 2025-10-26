(function() {
    // 检查浏览器环境
    if (typeof window !== 'undefined' && typeof process === 'undefined') {
        let buffer = [];
        
        // 创建输出容器
        const outputContainer = document.createElement('div');
        outputContainer.style.cssText = `
            font-family: 'Monaco', 'Menlo', 'Consolas', 'Courier New', monospace;
            white-space: pre-wrap;
            background: #f5f5f5;
            border: 1px solid #ddd;
            padding: 15px;
            margin: 10px;
            border-radius: 5px;
            font-size: 14px;
            line-height: 1.5;
        `;
        document.body.appendChild(outputContainer);
        
        // 实现 process.stdout.write
        window.process = {
            stdout: {
                write: function(text) {
                    buffer.push(text);
                }
            }
        };
        
        // 覆盖 console.log
        const originalConsoleLog = console.log;
        console.log = function(...args) {
            // 将参数转换为字符串
            const text = args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' ');
            
            buffer.push(text + '\n');
            
            originalConsoleLog.call(console, buffer.join(''));
            
            // 实时更新DOM
            updateOutput();
        };
        
        // 更新DOM显示
        function updateOutput() {
            const combinedText = buffer.join('');
            outputContainer.innerHTML = '';
            const textNode = document.createTextNode(combinedText);
            outputContainer.appendChild(textNode);
        }
    }
})();