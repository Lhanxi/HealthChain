## Project Summary

A decentralized healthcare data management platform leveraging blockchain (Ethereum smart contracts), a React web application, and a Node.js backend with MongoDB.

### Key Components

- **Smart Contracts (Solidity, Hardhat)**

  - **Patient, Doctor, InsuranceCompany Contracts:** Each user type has a contract for managing their public keys and access rights.
  - **Handler Contracts:** `PatientHandler`, `DoctorHandler`, and `InsuranceCompanyHandler` act as registries and access managers for their respective user types.
  - **Oracle Contracts:** `DoctorOracle` and `InsuranceCompanyOracle` verify and register trusted doctors/insurance companies.
  - **ResearchAccess Contract:** Stores anonymized patient data CIDs for research, respecting patient consent.
  - **Access Control:** Patients grant/revoke access to their data for doctors and insurance companies. All access is tracked on-chain.

- **Backend (Node.js, Express, MongoDB)**

  - Stores user private keys (encrypted) and PINs, mapped to Ethereum addresses.
  - Provides endpoints for storing/retrieving private keys and fetching data from IPFS.
  - Acts as a bridge between the webapp and decentralized storage (IPFS via Pinata).

- **Web Application (React, ethers.js, Material UI)**
  - User-friendly interface for patients, doctors, and insurance companies to register, authenticate, upload, and access health data.
  - Integrates with MetaMask for wallet connection and transaction signing.
  - Handles encryption/decryption of health data using RSA and AES (with keys managed per user).
  - Supports uploading encrypted data to IPFS and managing CIDs on-chain.
  - Includes anonymization utilities for research data (k-anonymity, etc.).

### Data Flow

1. **Registration:** Users (patients, doctors, insurance companies) register via the webapp, generating RSA key pairs. Public keys are stored on-chain; private keys are stored (encrypted) in the backend, protected by a user PIN.
2. **Data Upload:** Doctors upload encrypted patient data (AES-encrypted, with AES keys encrypted using patient/doctor public keys). Data is uploaded to IPFS; CIDs are stored in the patient's contract.
3. **Access Control:** Patients grant/revoke access to doctors/insurance companies via the webapp, updating on-chain permissions.
4. **Data Retrieval:** Authorized users fetch CIDs from the blockchain, retrieve encrypted data from IPFS, and decrypt it using their private keys (fetched securely from the backend with PIN verification).
5. **Research Access:** With patient consent, anonymized data is uploaded to a public research contract for aggregate analysis.

### Technologies Used

- Ethereum, Solidity, Hardhat
- React, Material UI, ethers.js
- Node.js, Express, MongoDB
- IPFS (via Pinata)
- Crypto: RSA, AES, k-anonymity

---

## Instructions to get started

1. Execute `npm i` in the root folder to install dependencies.

2. Open a new terminal and navigate to the `packages/hardhat` directory:

   ```bash
   cd packages/hardhat
   ```

3. Start the Hardhat node:

   ```bash
   npx hardhat node
   ```

4. Go back to the original terminal and deploy the contract:

   ```bash
   cd packages/hardhat
   npx hardhat run scripts/deploy.js --network localhost
   ```

5. Copy the address that the contract is deployed to and update the contract address in `/IS4302-Group-8/packages/webapp/src/contractConfig.js`.

6. Navigate to the `webapp` directory and start the application:
    ```bash
    cd ../webapp
    npm start
    ```

7. Navigate to the `backend` directory and start the application:
    ```bash
    cd ../backend
    node server.js
    ```
