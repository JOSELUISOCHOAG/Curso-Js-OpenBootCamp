dragstart: Este evento se dispara cuando se comienza a arrastrar un elemento. Se activa en el elemento arrastrado. Puedes utilizar este evento para configurar los datos que se deben transferir durante el arrastre mediante el método setData().

dragend: Este evento se desencadena cuando se completa el arrastre de un elemento, es decir, cuando se suelta el mouse o se cancela el arrastre. También se activa en el elemento arrastrado. Puedes utilizar este evento para realizar alguna acción después de que el elemento se ha soltado, como limpiar o restablecer propiedades.

dragover: Este evento se dispara cuando un elemento arrastrable se mueve sobre un área donde se puede soltar. Se activa en el elemento donde se realiza el arrastre. Puedes utilizar este evento para permitir que se puedan soltar elementos en esa área mediante el método preventDefault().

drop: Este evento se activa cuando se suelta un elemento arrastrable sobre un área de destino válida. Se dispara en el elemento donde se realiza el arrastre. Puedes utilizar este evento para obtener los datos transferidos durante el arrastre mediante el método getData() y realizar las acciones necesarias, como mover o copiar el elemento arrastrado al área de destino.
guía paso a paso para implementar el arrastrar y soltar:

Preparación del HTML:

Crea los elementos HTML que serán arrastrables y soltables. Por ejemplo, puedes utilizar elementos <div> con identificadores únicos para representar los elementos arrastrables y las áreas donde se pueden soltar.
Asigna atributos de arrastrar y soltar a los elementos relevantes. Utiliza los atributos draggable="true" en los elementos que se pueden arrastrar y ondragstart para iniciar el evento de arrastre.
Eventos de arrastre:

Agrega un controlador de eventos ondragstart al elemento que se va a arrastrar. Este evento se activa cuando el usuario comienza a arrastrar el elemento.
En el controlador de eventos, usa el método setData() para especificar los datos que se deben transferir durante el arrastre. Por ejemplo, puedes pasar el identificador único del elemento arrastrado.
Eventos de soltar:

Agrega controladores de eventos ondragover y ondrop al área donde se permitirá soltar los elementos.
En el controlador de eventos ondragover, usa el método preventDefault() para permitir soltar elementos en esa área.
En el controlador de eventos ondrop, utiliza el método getData() para obtener los datos transferidos durante el arrastre y realizar las acciones necesarias.