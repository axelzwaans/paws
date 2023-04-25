FROM gitpod/workspace-full:latest

# Install Node.js using nvm
# Arguments are passed using --build-arg when building the Docker image
ARG NODE_VERSION
RUN curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash \
    && . $HOME/.nvm/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set the default Node.js version
RUN echo "nvm use default" >> /workspace/.bashrc