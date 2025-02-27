# Mongoose Checkpoint Project

This project is a web application built using TypeScript, JavaScript, and npm. It includes a simple layout with a header and footer.

## Author

Ken Ovienadu (kenovienadu@gmail.com)

## Environment Variables

- `PORT`: The port number on which the application runs. Default is `3090`.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ken-gomycode/mongoose-checkpoint
    ```
2. Navigate to the project directory:
    ```sh
    cd mongoose-checkpoint
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root directory of the project and add the following environment variables:
    ```sh
    PORT=3090
    MONGODB_URL=<insert your MongoDB URL here>
    ```

### Start the application:

    ```sh
    npm run build:run
    ```

If all goes well, you should have the following in the terminal

```agsl
   Connected to MongoDB
   === Running Create Person ===
   === Running Create People ===
   === Running Find People ===
   === Running Find Person ===
   === Running Update Person ===
   === Running Create Person ===
   === Running Remove People ===
   === Running Create Person ===
   === Running Chain Query ===
   Disconnected from MongoDB
   
   Process finished with exit code 0

```

## License

This project is licensed under the MIT License.
