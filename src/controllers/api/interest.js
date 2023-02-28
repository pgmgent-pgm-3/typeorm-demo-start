/**
 * The interest API controllers
 */

import DataSource from '../../lib/DataSource.js';

export const getInterests = async (req, res, next) => {

}

export const postInterest = async (req, res, next) => {
  try {
    const interestRepository = DataSource.getRepository("Interest");
    await interestRepository.save(req.body);
    res.status(201).json({
      status: 'Inserted interest with success!'
    });
  } catch(e) {
    res.status(500).json({
      status: "Er liep iets fout!"
    })
  }
}

export const deleteInterest = async (req, res, next) => {

}

export const updateInterest = async (req, res, next) => {

}