export default function createController({Controller, Model, View, Service}) {
  const model = new Model();
  const view = new View();
  const service = new Service();

  return new Controller(model, view, service);
}
