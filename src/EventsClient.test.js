import EventsClient from './EventsClient';
import {eventsClientFixtures} from './fixtures/events-client';

describe('returns the expected result when the events service returns a list of events', () => {

  it('returns a list of events', async () => {
    // Arrange
    const expectedResult = eventsClientFixtures.getEvents.TWO_EVENTS;
    const eventsClient = new EventsClient({host: "http://localhost:1234"});

    // Act
    const events = await eventsClient.getEvents();

    // Assert
    expect(events).toEqual(expectedResult);
  });
});
