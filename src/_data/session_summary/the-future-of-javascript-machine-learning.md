## Why JS devs should care about ML ([1m00s](https://www.youtube.com/watch?v=eiHxns7e6EI&t=60s))

Eleanor opens with the pushback she keeps getting at meetups — *machine learning is for Python or R or Java, you JavaScript people build forms* — and flags that the launch of TensorFlow.js earlier in 2018 has changed the rules.

> "machine learning is for Python developers or R, maybe Java or Scala — JavaScript is for building web apps, you guys build forms, you make API requests"

> "for the first time, a major machine learning library, i.e. TensorFlow, has offered a fully supported, entirely JavaScript-based version"

> "TensorFlow.js works in the browser, and you know which language works in the browser? You guessed it, JavaScript"

## Data science, AI, ML — and neural networks ([2m34s](https://www.youtube.com/watch?v=eiHxns7e6EI&t=154s))

A quick disambiguation: data science solves complex problems with data, AI simulates human cognitive functions, machine learning is a subfield of both — and *artificial neural networks* are the slice of ML now eating its own neighbouring subfields like natural language processing and robotics.

> "data science generally is solving complex problems using data... artificial intelligence is the simulation of a human brain function by machines"

> "machine learning involves looking at data and finding insights without specifically being told what to look for"

> "they're even moving into other AI subdomains such as natural language processing and robotics where previously applied algorithms are being replaced with neural networks to great success"

## How an artificial neuron works ([5m45s](https://www.youtube.com/watch?v=eiHxns7e6EI&t=345s))

A biological neuron fires when enough dendrites are excited; an artificial neuron multiplies each input by a weight, sums them, adds a bias, and passes the result through an *activation function* (threshold, sigmoid or ReLU) to decide whether to fire.

> "an artificial neuron... is essentially an algorithm which receives a set of values, and if those values are high enough then it will activate"

> "you would initialise all of these weights randomly, and then they would be automatically adjusted to reflect the importance of the inputs"

> "if the sum of the inputs times the weights is positive, the neuron will activate, and if it's negative, it will not"

## Training a neural network ([8m50s](https://www.youtube.com/watch?v=eiHxns7e6EI&t=530s))

Wire neurons into input, hidden and output layers, feed in known input/output pairs (supervised learning), measure the gap between the model's output and the correct one with a loss function, and let an optimiser adjust the weights and biases until the gap shrinks.

> "you can then use something called a loss function to calculate how far off the model's output is from the correct output"

> "the optimiser algorithm... its job is to go back and update the weights and biases in order to get the outputs closer to the expected results"

> "you would repeat this a bunch of times with many sets of inputs and expected outputs, and eventually you get a trained model"

## Why JavaScript wasn't a contender — until TF.js ([10m51s](https://www.youtube.com/watch?v=eiHxns7e6EI&t=651s))

Python won the ML community because it was designed to be syntactically elegant and academics could test ideas quickly. JavaScript only recently caught up on syntax (generators, async/await) and on tooling — Brain.js and Synaptic.js exist but TensorFlow.js (announced 30 March 2018) is the first major library that ports its full Python API to JavaScript.

> "Python was designed right from the start to be syntactically elegant and easy to learn — so academics and researchers picked it up"

> "TensorFlow's GitHub repo has more than three times the number of stars compared to scikit-learn, which is the next most starred machine learning project"

> "this is TensorFlow completely rewritten in JavaScript, and despite the shared methods and almost identical API, you don't need TensorFlow or anything else installed to use TensorFlow.js"

## Demos in the browser ([19m10s](https://www.youtube.com/watch?v=eiHxns7e6EI&t=1150s))

The aijs.rocks demo gallery is full of working browser apps: Pac-Man controlled by your face via a transfer-learned MobileNet, Google Creative Lab's Move Mirror that matches your live webcam pose against 80,000 still images using PoseNet, David Ha's Sketch RNN that completes hand-drawn doodles, and Magenta.js for generative art and music.

> "the app loads a model which has already been trained but it requires the user to do this additional training"

> "you turn on your webcam and move around, and the camera pulls up pictures of poses that match yours in real time from a database of more than 80,000 images"

> "Magenta is a research project exploring the role of machine learning in the process of creating art and music"

## The Core and Layers APIs ([22m50s](https://www.youtube.com/watch?v=eiHxns7e6EI&t=1370s))

TF.js ships with a low-level Core API (tensors are n-dimensional arrays, you write the maths) and a higher-level, Keras-shaped Layers API (`tf.sequential()`, `model.add(tf.layers.dense(...))`, `model.compile`, `model.fit`) that handles the boilerplate of building and training a neural network.

> "a tensor is the central unit of data in TensorFlow.js — it's basically a multi-dimensional array of numbers, an n-dimensional array"

> "the flexible low-level Core API is syntactically very similar to the TensorFlow Python library"

> "this is a higher-level, Keras-inspired Layers API, and it makes it a whole lot easier to build and train models"

## Pretrained models and transfer learning ([27m01s](https://www.youtube.com/watch?v=eiHxns7e6EI&t=1621s))

For pure inference: `tf.loadModel(url)` on a MobileNet checkpoint gives you image classification in a few lines. For transfer learning: load the model, call `getLayer()`, and train your own classifier on top — the exact pattern the webcam Pac-Man demo uses.

> "load the model and then you pass it an image, video or canvas element, and then it will return an array of the most likely predictions"

> "whenever you hear convolutional neural network, think image recognition"

> "the Pac-Man demo was using MobileNet and retraining it with the user's extra images captured during the training"

## Performance and resources ([29m04s](https://www.youtube.com/watch?v=eiHxns7e6EI&t=1744s))

Inference benchmarks: Python TF on a CUDA GPU under 3ms, MacBook Pro CPU around 60ms, TF.js with WebGL on a fancy GPU under 11ms, integrated graphics around 100ms — all still milliseconds. Memory is managed by wrapping operations in `tf.tidy()` or calling `.dispose()` directly so the browser doesn't crash from leaked tensors.

> "this is not the hard-core memory management that C developers have to undergo — simply wrap your functions with a tf.tidy()"

> "100 milliseconds is not actually bad at all"

> "ml5.js... is a wrapper around TensorFlow.js which makes it even easier to load and access pre-trained models"

## The future: JavaScript as the master of user interaction ([30m40s](https://www.youtube.com/watch?v=eiHxns7e6EI&t=1840s))

The argument for the long term: JavaScript is the language for capturing mouse, voice, video, GPS and gyroscope events. TF.js means you can process that data through a model without sending it server-side, which is the basis for both accessible apps controlled by head movement or voice and privacy-friendly apps that never leak user data.

> "as JavaScript developers, we are not necessarily trying to play catch-up with Python when it comes to AI and machine learning"

> "running models in the browser means that your user data doesn't have to be sent server-side anywhere"

> "there's a lot of potential to build accessible apps using head movements or voice as controllers"

---

Eleanor builds the working developer's on-ramp into browser machine learning, starting with a rare clean nesting of data science, AI, ML and neural networks that doesn't pretend you already know linear algebra. From there it's biological-to-artificial neurons, weights, activation functions and supervised training, before pivoting to the TensorFlow.js launch and its Core plus Layers APIs that let the same JavaScript train, infer and transfer-learn in the browser via WebGL. Demos like webcam Pac-Man, Move Mirror and Sketch RNN sell the pitch, and the closing argument lands hard: only JavaScript sits in the same runtime as the keyboard, mouse, webcam and microphone.
